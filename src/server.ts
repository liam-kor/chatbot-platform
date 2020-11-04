import { ApolloServer } from 'apollo-server-express';
import { applyMiddleware } from 'graphql-middleware';
import { createContext, prisma } from './context';
import express from 'express';
import { schema } from './schema';
import { getCalculatedConditionStatuses } from './services';

const schemaWithMiddleware = applyMiddleware(schema);

const server = new ApolloServer({
  schema: schemaWithMiddleware,
  context: createContext,
});

const app = express();
server.applyMiddleware({ app });

const router = express.Router();
router.get('/', async (req, res) => {
  const intentCode = req.query.intent_code;
  const intent = await prisma.intent.findOne({
    where: {
      code: intentCode,
    },
    include: {
      blocks: true,
      conditions: {
        include: {
          conditionStatuses: true,
        },
      },
    },
  });
  console.log(intent);

  const conditions = await getCalculatedConditionStatuses(intent.conditions);

  console.log(conditions);
  // const nonMember = [{ id: 1 }, { id: 3 }];
  // const nonAuth = [{ id: 4 }];
  // const member = [{ id: 3 }, { id: 2 }];

  const block = await prisma.block.findMany({
    where: {
      intent: {
        id: intent.id,
      },
      conditionStatuses: {
        every: {
          OR: conditions,
        },
      },
    },
  });
  console.log(block);

  res.send('ok');
});
app.use('/test', router);

app.listen({ port: 4000 }, () =>
  process.stdout.write(
    `🚀 Server ready at http://localhost:4000${server.graphqlPath}`,
  ),
);

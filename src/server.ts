import { ApolloServer } from 'apollo-server-express';
import { applyMiddleware } from 'graphql-middleware';
import { createContext, prisma } from './context';
import express from 'express';
import { schema } from './schema';

const schemaWithMiddleware = applyMiddleware(schema);

const server = new ApolloServer({
  schema: schemaWithMiddleware,
  context: createContext,
});

const app = express();
server.applyMiddleware({ app });

const router = express.Router();
router.get('/', async (req, res) => {
  const intent_code = req.query.intent_code;
  const intent = await prisma.intent.findOne({
    where: {
      code: intent_code,
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
  const selected_condition = intent.conditions[0].conditionStatuses[0];

  const block = await prisma.block.findMany({
    where: {
      intent: {
        id: intent.id,
      },
      conditionStatuses: {
        every: {
          id: 2,
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

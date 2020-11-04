import { ApolloServer } from 'apollo-server-express';
import { applyMiddleware } from 'graphql-middleware';
import { createContext, prisma } from './context';
import express from 'express';
import { schema } from './schema';
import { router } from './routers';

const schemaWithMiddleware = applyMiddleware(schema);

const server = new ApolloServer({
  schema: schemaWithMiddleware,
  context: createContext,
});

const app = express();
server.applyMiddleware({ app });

// const router = express.Router();

app.use('/test', router);

app.listen({ port: 4000 }, () =>
  process.stdout.write(
    `🚀 Server ready at http://localhost:4000${server.graphqlPath}`,
  ),
);

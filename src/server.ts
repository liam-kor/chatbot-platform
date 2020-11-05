import { ApolloServer } from 'apollo-server-express';
import { applyMiddleware } from 'graphql-middleware';
import { createContext } from './context';
import express from 'express';
import { schema } from './schema';
import { router } from './routers';

const schemaWithMiddleware = applyMiddleware(schema);

const server = new ApolloServer({
  schema: schemaWithMiddleware,
  context: createContext,
});

const app = express();
app.use('/api', router);
server.applyMiddleware({ app });

app.listen({ port: 8080 }, () =>
  process.stdout.write(
    `🚀 Server ready at http://localhost:8080${server.graphqlPath}`,
  ),
);

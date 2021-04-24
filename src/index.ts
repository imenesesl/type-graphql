import 'reflect-metadata';

import express from 'express';
import { graphqlHTTP } from 'express-graphql';

import { schema } from './schema';

const root = {
  hello: () => {
    return 'TypeGraphQL';
  },
};

const app = express();

app.use('/graphql', async (req, res) =>
  graphqlHTTP({
    schema: await schema(),
    rootValue: root,
    graphiql: true,
  })(req, res),
);
app.listen(4000, () => {
  // eslint-disable-next-line no-console
  console.warn('Running a GraphQL API server at http://localhost:4000/graphql');
});

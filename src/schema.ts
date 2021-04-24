import { buildSchema } from 'type-graphql';

import { RecipeResolver } from './resolvers';

export const schema = async () =>
  await buildSchema({
    resolvers: [RecipeResolver],
  });

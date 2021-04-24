/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
import { Arg, Query, Resolver } from 'type-graphql';

import { RecipeNotFoundError } from '../errors';
import { RecipeService } from '../services';
import { Recipe } from '../types';

@Resolver(Recipe)
export class RecipeResolver {
  constructor(private recipeService: RecipeService) {}

  @Query(returns => Recipe)
  async recipe(@Arg('id') id: string) {
    const recipe = await this.recipeService.findById(id);
    if (recipe === undefined) {
      throw new RecipeNotFoundError(id);
    }
    return recipe;
  }
}

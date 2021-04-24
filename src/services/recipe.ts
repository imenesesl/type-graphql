// eslint-disable-next-line no-unused-vars
import { Recipe } from '../types';

export class RecipeService {
  async findById(id: string): Promise<Recipe> {
    return { title: 'Recipe', id: id, creationDate: new Date(), ingredients: [], description: 'This is a recipe HD' };
  }
}

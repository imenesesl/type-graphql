export class RecipeNotFoundError extends Error {
  constructor(private id: string) {
    super(`Not found recipe: ${id}`);
  }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeService = void 0;
class RecipeService {
    async findById(id) {
        return { title: 'Recipe', id: id, creationDate: new Date(), ingredients: [], description: 'This is a recipe' };
    }
}
exports.RecipeService = RecipeService;

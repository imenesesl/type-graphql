"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeNotFoundError = void 0;
class RecipeNotFoundError extends Error {
    constructor(id) {
        super(`Not found recipe: ${id}`);
        this.id = id;
    }
}
exports.RecipeNotFoundError = RecipeNotFoundError;

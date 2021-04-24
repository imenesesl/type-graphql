"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeResolver = void 0;
const type_graphql_1 = require("type-graphql");
const errors_1 = require("../errors");
// import { NewRecipeInput, RecipesArgs } from '../inputs-args';
// eslint-disable-next-line no-unused-vars
const services_1 = require("../services");
const types_1 = require("../types");
let RecipeResolver = class RecipeResolver {
    constructor(recipeService) {
        this.recipeService = recipeService;
        //
    }
    async recipe(id) {
        const recipe = await this.recipeService.findById(id);
        if (recipe === undefined) {
            throw new errors_1.RecipeNotFoundError(id);
        }
        return recipe;
    }
};
__decorate([
    type_graphql_1.Query(returns => types_1.Recipe),
    __param(0, type_graphql_1.Arg('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RecipeResolver.prototype, "recipe", null);
RecipeResolver = __decorate([
    type_graphql_1.Resolver(types_1.Recipe),
    __metadata("design:paramtypes", [services_1.RecipeService])
], RecipeResolver);
exports.RecipeResolver = RecipeResolver;

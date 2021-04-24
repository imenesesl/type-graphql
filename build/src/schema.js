"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const type_graphql_1 = require("type-graphql");
const resolvers_1 = require("./resolvers");
const schema = async () => await type_graphql_1.buildSchema({
    resolvers: [resolvers_1.RecipeResolver],
});
exports.schema = schema;

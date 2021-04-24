"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const schema_1 = require("./schema");
const root = {
    hello: () => {
        return 'TypeGraphQL';
    },
};
const app = express_1.default();
app.use('/graphql', async () => express_graphql_1.graphqlHTTP({
    schema: await schema_1.schema(),
    rootValue: root,
    graphiql: true,
}));
app.listen(4000, () => {
    // eslint-disable-next-line no-console
    console.warn('Running a GraphQL API server at http://localhost:4000/graphql');
});

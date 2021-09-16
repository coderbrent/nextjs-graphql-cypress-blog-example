"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.typeDefs = void 0;
var apollo_server_1 = require("apollo-server");
exports.typeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query {\n    users: [User]\n  }\n\n  type User {\n    username: String\n    password: String\n  }\n\n  input UserLogin {\n    username: String\n    password: String\n  }\n\n  type LoginResponse {\n    id: String\n    token: String\n  }\n\n  type Mutation {\n    login(input: UserLogin!): LoginResponse\n  }\n"], ["\n  type Query {\n    users: [User]\n  }\n\n  type User {\n    username: String\n    password: String\n  }\n\n  input UserLogin {\n    username: String\n    password: String\n  }\n\n  type LoginResponse {\n    id: String\n    token: String\n  }\n\n  type Mutation {\n    login(input: UserLogin!): LoginResponse\n  }\n"])));
var templateObject_1;

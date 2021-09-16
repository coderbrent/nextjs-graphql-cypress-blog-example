"use strict";
exports.__esModule = true;
exports.resolvers = void 0;
var apollo_server_1 = require("apollo-server");
var typeDefs_1 = require("./typeDefs");
var users = [
    { username: "brentabruzese", password: "Zsw0weksdmk3@83" },
    { username: "derpyd00d1", password: "dasdad@83" },
    { username: "joesap3", password: "dsuifnu43u@83" },
];
exports.resolvers = {
    Query: {
        users: function () { return users; }
    },
    Mutation: {
        login: function (_, _a, ctx) {
            var username = _a.username, password = _a.password;
            var foundUser = users.find(function (user) {
                return user.username === username && user.password === password;
            });
            if (foundUser) {
                return { id: "1", token: "sdfj4ljsdjkf4jkisdiofmsdfiok4" };
            }
            else {
                throw new Error("Login was incorrect or the user doesnt exist!");
            }
        }
    }
};
var server = new apollo_server_1.ApolloServer({
    typeDefs: typeDefs_1.typeDefs,
    resolvers: exports.resolvers
});
server.listen().then(function (_a) {
    var url = _a.url;
    console.log("\uD83D\uDE80 server ready at " + url);
});

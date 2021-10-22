// lambda.js
const { ApolloServer } = require("apollo-server-lambda");

const { typeDefs, resolvers, mocks } = require("./graphql/schema");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks,
  mockEntireSchema: false,
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context
  })
});

module.exports = {
  server
};
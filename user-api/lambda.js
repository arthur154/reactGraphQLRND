// lambda.js
const { ApolloServer } = require("apollo-server-lambda");
const { typeDefs, resolvers, mocks } = require("./graphql/schema");
const { ApolloServerPluginInlineTrace } = require("apollo-server-core");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks: false,
  mockEntireSchema: false,
  plugins: [ApolloServerPluginInlineTrace()],
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context
  })
});

exports.graphqlHandler = server.createHandler();

// module.exports = {
//   server
// };
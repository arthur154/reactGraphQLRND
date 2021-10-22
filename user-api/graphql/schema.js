// schema.js
const { gql } = require("apollo-server-lambda");
const _ = require("lodash");

// TODO: Replace with DB
const users = [
  {
    id: "1",
    name: "Guy Dude",
    username: "duddie",
    email: "guy@things.com",
    phone: "1-123-456-7890",
    address: {
      street: "123 Baker Street",
      suite: "1A",
      city: "Phoenix",
      zip: "85016"
    }
  },
  {
    id: "2",
    name: "Girl Dudette",
    username: "dudettie",
    email: "girl@things.com",
    phone: "1-098-765-4321",
  },
  {
    id: "3",
    name: "Rand-o-Tron",
    username: "randy",
    email: "duffy@greensweeps.com",
    phone: "1-156-432-7890",
  },
];

const typeDefs = gql`
   directive @cacheControl(
      maxAge: Int,
      scope: CacheControlScope
  ) on OBJECT | FIELD | FIELD_DEFINITION

  enum CacheControlScope {
      PUBLIC
      PRIVATE
  }

  type Address {
    street: String,
    suite: String,
    city: String,
    zipcode: String,
  }

  type User @cacheControl(maxAge: 300) {
    id: ID!,
    name: String,
    username: String,
    email: String,
    phone: String,
    address: Address,
  }

  type Query {
    user(id: ID!): User
    users: [User]
  }
`;

const resolvers = {
  Query: {
    user(obj, args, context, info) {
      return _.find(users, { id: args.id });
    },
    users(obj, args, context, info) {
      return users;
    }
  }
};

const mocks = {};

module.exports = {
  typeDefs,
  resolvers,
  mocks,
  mockEntireSchema: true
};
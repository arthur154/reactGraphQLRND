const graphql = require("graphql");
const _ = require("lodash");
// const User = require('../models/user');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

const users = [
  {
    id: "1",
    name: "Guy Dude",
    username: "duddie",
    email: "guy@things.com",
    phone: "1-123-456-7890",
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

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    // address
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(users, { id: args.id });
      },
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return users;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  // mutation: Mutation
});

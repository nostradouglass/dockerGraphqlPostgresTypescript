import { GraphQLID, GraphQLList, GraphQLObjectType } from "graphql";
const UserQueries = require( "../queries/userQueries");
import UserType from "./types/userType";

const RootQuery: GraphQLObjectType<string, () => object> =
  new GraphQLObjectType({
    name: "RootQueryType",
    fields: () => ({
      user: {
        type: UserType,
        args: { id: { type: GraphQLID } },
        resolve(parentValue, { id }) {
          return UserQueries.getUserById(id);
        },
      },
      users: {
        type: new GraphQLList(UserType),
        resolve() {
          return UserQueries.getUsers()
        }
      }
    }),
  });


  export default RootQuery



import { graphql, GraphQLBoolean, GraphQLObjectType, GraphQLString } from "graphql";
import UserType from "../schema/types/userType";
const userQueries = require('../queries/userQueries')

export const mutation: GraphQLObjectType<string, () => object> = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addUser: {
            type: UserType,
            args: {
                first_name: { type: GraphQLString},
                last_name: { type: GraphQLString},
                email: { type: GraphQLString},
                is_admin: { type: GraphQLBoolean}
            },
            resolve(parentValue, { first_name, last_name, email, is_admin}) {
                return userQueries.createUser(first_name, last_name, email, is_admin)
            }
        }
    }
})
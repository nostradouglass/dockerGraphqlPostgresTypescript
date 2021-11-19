
import  graphql, {GraphQLSchema}  from "graphql";
import RootQueryType from './rootQueryTypes'
import { mutation } from "../mutations";

export default new GraphQLSchema({
    query: RootQueryType,
    mutation: mutation
})

import { GraphQLBoolean, GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";



const UserType: GraphQLObjectType<any, () => object> = new GraphQLObjectType(
    {
        name: "UserType",
        fields: () => ( {
            id: {type: GraphQLID},
            first_name: { type: GraphQLString},
            last_name: { type: GraphQLString},
            email: { type: GraphQLString},
            is_admin: { type: GraphQLBoolean},
        })
    }
)


export default UserType


import {gql} from '@apollo/client'

export const FETCH_USERS = gql`
{ 
    users {
        id
        first_name
        last_name
    }
    
    }
`;
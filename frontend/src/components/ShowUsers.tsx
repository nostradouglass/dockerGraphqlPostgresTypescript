import { FETCH_USERS } from "../queries/userQueries";
import { useQuery } from "@apollo/client";

export const ShowUsers = () => {
  const { loading, data } = useQuery(FETCH_USERS);

  const mapUsers = () => {
    if (loading || !data) {
      return <li>Loading</li>;
    } else {
      return data.users.map((user: any) => {
        return (
        <li key={user.id}>
            First: {user.first_name} <br />
            Last: {user.last_name}
            </li>
        )
      });
    }
  };

  return <ul>{mapUsers()}</ul>;
};

import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { FETCH_USERS } from "../queries/userQueries";

const CreateUser = () => {
  const [createUser] = useMutation(CREATE_USER);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createUser({
      variables: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        is_admin: isAdmin,
      },
      refetchQueries: [{ query: FETCH_USERS }],
    });
    setFirstName("");
    setLastName("");
    setEmail("");
    setIsAdmin(false);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First name"
        ></input>
        <br />
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last name"
        ></input>
        <br />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email address"
        ></input>
        <label>
          <br />
          is admin:
          <input
            type="checkbox"
            checked={isAdmin}
            onChange={(e) => setIsAdmin(!isAdmin)}
          />
        </label>
        <br />
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

const CREATE_USER = gql`
  mutation ADD_USER(
    $first_name: String
    $last_name: String
    $email: String
    $is_admin: Boolean
  ) {
    addUser(
      first_name: $first_name
      last_name: $last_name
      email: $email
      is_admin: $is_admin
    ) {
      id
      first_name
    }
  }
`;

export default CreateUser;

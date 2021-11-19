import pool from "./pool";

const getUsers = () => {
  return pool
    .query(`SELECT * FROM users ORDER BY id ASC`)
    .then((data: any) => {
      return data.rows as object[];
    })
    .catch((err: string) => {
      throw err;
    });
};

const getUserById = (id: String) => {
    return pool
        .query(`SELECT * FROM users WHERE id = $1`, [id])
        .then((data: any) => {
            return data.rows[0]
        }).catch((err: string) => {
            throw err
        })
}

const createUser = (first_name: string,last_name: string,email: string,is_admin: string) => {
  return pool
    .query(
      `INSERT INTO users (first_name, last_name, email, is_admin) VALUES ($1, $2, $3, $4)`,
      [first_name, last_name, email, is_admin]
    )
    .then((data: any) => {
      return data.rowCount;
    })
    .catch((err: string) => {
      throw err;
    });
};

module.exports = { getUsers, createUser, getUserById };

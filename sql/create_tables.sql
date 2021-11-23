CREATE EXTENSION IF NOT EXISTS "uuid-ossp";



CREATE TABLE IF NOT EXISTS users (
  id uuid DEFAULT uuid_generate_v4 (),
  first_name varchar(250),
  last_name varchar(250),
  email varchar(250),
  is_admin boolean,
  PRIMARY KEY (id)
);

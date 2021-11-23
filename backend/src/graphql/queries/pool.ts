const Pool = require("pg").Pool


const pool = new Pool({
    user: "temp",
    host: "db",
    database: "full_project",
    password: "password",
    port: 5432
})



export default pool
const { createPool } = require("mysql2");

const pool = createPool({
  host: "localhost",
 
  user: "root",
  password: "password",
  database: "myfirsttable",
  
});

module.exports = pool;
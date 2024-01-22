// import mysql library
const mysql = require("mysql");

// import dotenv
require("dotenv").config();

// destructure process.env object
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE, APP_PORT } =
  process.env;

// database configuration
const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});

// connect to database
db.connect((err) => {
  // check errors
  if (err) {
    console.log("Error connecting " + err.stack);
    return;
  }

  // else
  console.log("Connected to database");
  console.log("Running on port", APP_PORT);
  return;
});

// export module
module.exports = db;

require("dotenv").config();

module.exports = {
  development: {
    username: "postgres",
    password: "1978",
    database: "ecommerce_db_nj",
    port: 5432,
    host: "localhost",
    dialect: "postgres",
    logging: false,
  },
  test: {
    username: "postgres",
    password: "root",
    database: "ecommerce_db_nj",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: process.env.DB_UUSERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dialect: "postgres",
    dialectOptions: 
    { ssl: { required: true, rejectUnauthorized: false } },
  },
};

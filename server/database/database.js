const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'products',
  password: process.env.PASSWORD || 'testing123',
  port: process.env.PORT || 5432
});

pool.connect()
  .then(() => {
    console.log('Connected to database');
  })
  .catch((error) => {
    console.log(error);
    console.log('Could not connect to database');
  })

  module.exports = pool;
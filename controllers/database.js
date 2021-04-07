/*  5.  Connecting to database
        
const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'path/to/database.sqlite'
});

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: (Choose one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' )
});

*/

// 5.1 Import dependencies
const { Sequelize } = require('sequelize');

// 5.2 Passing connection URI w/ postgres
const sequelize = new Sequelize('codedys', 'damai', 'slash', {
    host: 'localhost',
    port: 5432,          // 5432: port khusus postgres
    dialect: 'postgres'
});

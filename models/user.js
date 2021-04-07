

// jika database yang dibuat hanya satu, langsung exports:

module.exports = (sequelize, type) => {
    return sequelize.define(
      'users', 
      {
      //Define model atributes
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: type.STRING(100),
      },
      password: {
        type: type.STRING(100)
      },
      created_at: type.DATE,
      updated_at: type.DATE
    }, 
    {
      // other models
      freezeTableName: true,
      underscored: true
    }
    );
};

// Jika ada beberapa function dari database:
const UserModel = (sequelize, type) => {
    return sequelize.define(
      'users', 
      {
      //Define model atributes
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: type.STRING(100),
      },
      password: {
        type: type.STRING(100)
      },
      created_at: type.DATE,
      updated_at: type.DATE
    }, 
    {
      // other models
      freezeTableName: true,
      underscored: true
    }
    );
};

module.exports = UserModel;


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
  dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});
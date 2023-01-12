const Sequelize = require('sequelize');
require('dotenv').config();


if (process.env.JAWSDB_URL) {//Heroku
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {//Localhost
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
  }
);
}

module.exports = sequelize;
require('dotenv').config();

module.exports = {
  development: {
    username: 'root',
    password: 'marcelo1988nejineji',
    database: 'devices_management',
    host: process.env.HOST,
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: 'marcelo1988nejineji',
    database: 'devices_management',
    host: process.env.HOST,
    dialect: 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: 'mysql',
  },
};

const db = require('./db');
const Sequelize = require('sequelize');

const Person = db.define('person', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  gender: {
    type: Sequelize.ENUM('male', 'female'),
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false,
  }
})

module.exports = Person;

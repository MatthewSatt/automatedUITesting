'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: "thefakeemail1@gmail.com",
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password1'),
      },
      {
        email: "theFAKEEMAIL2@gmail.com",
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password2'),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin1@gmail.com',
      password: "123",
      firstName: 'Nhat',
      lastName: 'Son',
      address: "VN",
      phonenumber:"0935901124",
      gender: 1,
      typeRole:"ROLE",
      keyRole: "R12",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

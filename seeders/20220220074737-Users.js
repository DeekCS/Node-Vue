'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here. 
     *
     * Example:
     */
     await queryInterface.bulkInsert(
       "Users",
       [
         {
           id: 1,
           username: "Ali",
           name: "ahmad",
           phone:"123456789",
           age:22,
           dob:"12-9-2021",
         },
          {
            id: 2,
            username: "Aliiiiiiii",
            name: "ahmad",
            phone:"123456789",
            age:22,
            dob:"12-9-2021",
          },

       ],
       {}
     );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

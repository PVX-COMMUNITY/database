"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("birthday", [
      {
        memberjid: "member1@example.com",
        name: "John Doe",
        username: "john_doe",
        date: 15,
        month: 3,
        year: 1990,
        place: "New York",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        memberjid: "member2@example.com",
        name: "Jane Smith",
        username: "jane_smith",
        date: 22,
        month: 6,
        year: 1985,
        place: "Los Angeles",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        memberjid: "member3@example.com",
        name: "Alice Johnson",
        username: "alice_johnson",
        date: 8,
        month: 12,
        year: 1992,
        place: "San Francisco",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        memberjid: "member4@example.com",
        name: "Bob Brown",
        username: "bob_brown",
        date: 19,
        month: 9,
        year: 1988,
        place: "Chicago",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("birthday", null, {});
  },
};

"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("member", [
      {
        memberjid: "member1@example.com",
        name: "John Doe",
        donation: 100,
        badges: ["newcomer", "active"],
        role: "member",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        memberjid: "member2@example.com",
        name: "Jane Smith",
        donation: 50,
        badges: ["newcomer"],
        role: "member",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        memberjid: "member3@example.com",
        name: "Alice Johnson",
        donation: 200,
        badges: ["vip", "active"],
        role: "admin",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        memberjid: "member4@example.com",
        name: "Bob Brown",
        donation: 0,
        badges: ["newcomer"],
        role: "member",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("member", null, {});
  },
};

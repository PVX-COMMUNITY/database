"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("blacklist", [
      {
        memberjid: "member1@example.com",
        reason: "Spamming",
        admin: "admin@example.com",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        memberjid: "member2@example.com",
        reason: "Inappropriate behavior",
        admin: "admin@example.com",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        memberjid: "member3@example.com",
        reason: "Abusive language",
        admin: "admin2@example.com",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        memberjid: "member4@example.com",
        reason: "Violation of group rules",
        admin: "admin3@example.com",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("blacklist", null, {});
  },
};

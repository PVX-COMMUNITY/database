"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("badge", [
      {
        badge_info: "VIP Member",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        badge_info: "Top Donor",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        badge_info: "Active Member",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        badge_info: "Moderator",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("badge", null, {});
  },
};

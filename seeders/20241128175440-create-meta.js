"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("meta", [
      {
        variable: "isFeatureEnabled",
        value: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        variable: "isMaintenanceMode",
        value: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        variable: "isPremiumServiceAvailable",
        value: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        variable: "isUserVerificationRequired",
        value: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("meta", null, {});
  },
};

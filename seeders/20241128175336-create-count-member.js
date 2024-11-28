"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("count_member", [
      {
        memberjid: "member1@example.com",
        groupjid: "group1@example.com",
        message_count: 100,
        warning_count: 0,
        video_count: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        memberjid: "member2@example.com",
        groupjid: "group2@example.com",
        message_count: 50,
        warning_count: 1,
        video_count: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        memberjid: "member3@example.com",
        groupjid: "group3@example.com",
        message_count: 200,
        warning_count: 0,
        video_count: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        memberjid: "member4@example.com",
        groupjid: "group4@example.com",
        message_count: 150,
        warning_count: 2,
        video_count: 7,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("count_member", null, {});
  },
};

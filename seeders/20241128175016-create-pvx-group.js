"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("pvx_group", [
      {
        groupjid: "group1@example.com",
        gname: "Group One",
        link: "https://example.com/group1",
        commands_disabled: Sequelize.literal("'{}'::TEXT[]"),
        type: "whatsapp",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        groupjid: "group2@example.com",
        gname: "Group Two",
        link: "https://example.com/group2",
        commands_disabled: ["kick", "ban"],
        type: "telegram",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        groupjid: "group3@example.com",
        gname: "Group Three",
        link: "https://example.com/group3",
        commands_disabled: ["mute"],
        type: "whatsapp",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        groupjid: "group4@example.com",
        gname: "Group Four",
        link: "https://example.com/group4",
        commands_disabled: ["warn"],
        type: "discord",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("pvx_group", null, {});
  },
};

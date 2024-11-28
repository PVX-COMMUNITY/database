"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("count_member", {
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.fn("gen_random_uuid"),
        primaryKey: true,
        allowNull: false,
      },
      memberjid: {
        type: Sequelize.TEXT,
        allowNull: false,
        references: {
          model: "member", // Refers to the 'member' table
          key: "memberjid", // Foreign key on 'memberjid'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      groupjid: {
        type: Sequelize.TEXT,
        allowNull: false,
        references: {
          model: "pvx_group", // Refers to the 'pvx_group' table
          key: "groupjid", // Foreign key on 'groupjid'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      message_count: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      warning_count: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
          min: 0,
          max: 3,
        },
      },
      video_count: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
    });

    // Add unique constraint on (memberjid, groupjid)
    await queryInterface.addConstraint("count_member", {
      fields: ["memberjid", "groupjid"],
      type: "unique",
      name: "unique_member_group",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("count_member");
  },
};

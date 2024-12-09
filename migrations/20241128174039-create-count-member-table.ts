import { DataTypes, QueryInterface, Sequelize } from "sequelize";

// /** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface: QueryInterface, Sequelize: Sequelize) {
    await queryInterface.createTable("count_member", {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.fn("gen_random_uuid"),
        primaryKey: true,
        allowNull: false,
      },
      memberjid: {
        type: DataTypes.TEXT,
        allowNull: false,
        references: {
          model: "member", // Refers to the 'member' table
          key: "memberjid", // Foreign key on 'memberjid'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      groupjid: {
        type: DataTypes.TEXT,
        allowNull: false,
        references: {
          model: "pvx_group", // Refers to the 'pvx_group' table
          key: "groupjid", // Foreign key on 'groupjid'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      message_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      warning_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
          min: 0,
          max: 3,
        },
      },
      video_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updated_at: {
        type: DataTypes.DATE,
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

  async down(queryInterface: QueryInterface, Sequelize: Sequelize) {
    await queryInterface.dropTable("count_member");
  },
};

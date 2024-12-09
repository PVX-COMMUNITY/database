import { DataTypes, QueryInterface, Sequelize } from "sequelize";

// /** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface: QueryInterface, Sequelize: Sequelize) {
    await queryInterface.createTable("blacklist", {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.fn("gen_random_uuid"),
        primaryKey: true,
        allowNull: false,
      },
      memberjid: {
        type: DataTypes.TEXT,
        unique: true,
        allowNull: false,
        references: {
          model: "member", // Refers to the 'member' table
          key: "memberjid", // Foreign key on 'memberjid'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      reason: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      admin: {
        type: DataTypes.TEXT,
        allowNull: false,
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
  },

  async down(queryInterface: QueryInterface, Sequelize: Sequelize) {
    await queryInterface.dropTable("blacklist");
  },
};

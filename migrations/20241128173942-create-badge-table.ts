import { DataTypes, QueryInterface, Sequelize } from "sequelize";

// /** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface: QueryInterface, Sequelize: Sequelize) {
    await queryInterface.createTable("badge", {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.fn("gen_random_uuid"),
        primaryKey: true,
        allowNull: false,
      },
      sno: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      badge_info: {
        type: DataTypes.TEXT,
        unique: true,
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
    await queryInterface.dropTable("badge");
  },
};

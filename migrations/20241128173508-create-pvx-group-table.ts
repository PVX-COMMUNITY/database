import { DataTypes, QueryInterface, Sequelize } from "sequelize";

// /** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface: QueryInterface, Sequelize: Sequelize) {
    await queryInterface.createTable("pvx_group", {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.fn("gen_random_uuid"),
        primaryKey: true,
        allowNull: false,
      },
      groupjid: {
        type: DataTypes.TEXT,
        unique: true,
        allowNull: false,
      },
      gname: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      link: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      commands_disabled: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: false,
        defaultValue: [],
      },
      type: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "whatsapp",
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
    await queryInterface.dropTable("pvx_group");
  },
};

import { DataTypes, QueryInterface, Sequelize } from "sequelize";

module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: Sequelize) {
    await queryInterface.createTable("member", {
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
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      donation: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
        validate: {
          min: 0,
        },
      },
      badges: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: false,
        defaultValue: [],
      },
      role: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "member",
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

  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable("member");
  },
};

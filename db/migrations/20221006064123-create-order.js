/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      card_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Cards',
          key: 'id',
        },
      },
      // card_name: {
      //   type: Sequelize.STRING,
      //   references: {
      //     model: 'Cards',
      //     key: 'name',
      //   },
      // },
      // card_price: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: 'Cards',
      //     key: 'price',
      //   },
      // },
      // card_image: {
      //   type: Sequelize.STRING,
      //   references: {
      //     model: 'Cards',
      //     key: 'image',
      //   },
      // },
      // card_condition: {
      //   type: Sequelize.STRING,
      //   references: {
      //     model: 'Cards',
      //     key: 'condition',
      //   },
      // },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  },
};

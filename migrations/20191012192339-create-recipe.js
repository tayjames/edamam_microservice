'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Recipes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      foodType: {
        type: Sequelize.STRING
      },
      recipe: {
        type: Sequelize.STRING
      },
      recipeUrl: {
        type: Sequelize.STRING
      },
      servings: {
        type: Sequelize.INTEGER
      },
      ingredients: {
        type: Sequelize.INTEGER
      },
      calories: {
        type: Sequelize.FLOAT
      },
      prepTime: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Recipes');
  }
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    foodType: DataTypes.STRING,
    recipe: DataTypes.STRING,
    recipeUrl: DataTypes.STRING,
    servings: DataTypes.INTEGER,
    ingredients: DataTypes.INTEGER,
    calories: DataTypes.FLOAT,
    prepTime: DataTypes.INTEGER
  }, {});
  Recipe.associate = function(models) {
    // associations can be defined here
  };
  return Recipe;
};
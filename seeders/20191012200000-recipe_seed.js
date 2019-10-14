'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Recipes', [{
      foodType: 'Coconut',
      recipe: 'The Coconut Cake',
      recipeUrl: 'https://www.epicurious.com/recipes/food/views/the-coconut-cake-baked-by-melissa',
      servings: 1,
      ingredients: 4,
      calories: 6743.52,
      prepTime: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      foodType: 'Coconut',
      recipe: 'Coconut Rice',
      recipeUrl: 'http://herbivoracious.com/2009/03/coconut-rice-recipe.html',
      servings: 4,
      ingredients: 4,
      calories: 2215.5,
      prepTime: 29,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      foodType: 'Coconut',
      recipe: 'Coconut Quinoa',
      recipeUrl: 'http://www.bonappetit.com/recipe/coconut-quinoa',
      servings: 6,
      ingredients: 4,
      calories: 1809.59,
      prepTime: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      foodType: 'Coconut',
      recipe: 'Coconut Nice',
      recipeUrl: 'http://www.bbcgoodfood.com/recipes/coconut-nice',
      servings: 30,
      ingredients: 8,
      calories: 4241.227,
      prepTime: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      foodType: 'Coconut',
      recipe: 'Coconut Jam',
      recipeUrl: 'http://zesterdaily.com/cooking/reconsidering-coconut/',
      servings: 8,
      ingredients: 5,
      calories: 1634.69,
      prepTime: 238,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      foodType: 'Pineapple',
      recipe: 'Pineapple Cocktail',
      recipeUrl: 'https://www.epicurious.com/recipes/food/views/pineapple-cocktail-200158',
      servings: 6,
      ingredients: 6,
      calories: 1031.45687189375,
      prepTime: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      foodType: 'Pineapple',
      recipe: 'Pineapple Jam',
      recipeUrl: 'http://www.marthastewart.com/348727/pineapple-jam',
      servings: 6,
      ingredients: 4,
      calories: 2040.70,
      prepTime: 125,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      foodType: 'Pineapple',
      recipe: 'Pineapple Mint Vodka',
      recipeUrl: 'http://www.bonappetit.com/recipes/2013/02/pineapple-mint-vodka',
      servings: 4,
      ingredients: 3,
      calories: 2082.8616824002156,
      prepTime: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      foodType: 'Pineapple',
      recipe: 'Pineapple Raita',
      recipeUrl: 'http://www.thekitchn.com/pineapple-raita-165492',
      servings: 2,
      ingredients: 5,
      calories: 310.67684275000005,
      prepTime: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      foodType: 'Pineapple',
      recipe: 'Pineapple Boat',
      recipeUrl: 'http://www.cookingchanneltv.com/recipes/laura-calder/pineapple-boats.html',
      servings: 2,
      ingredients: 1,
      calories: 452.5,
      prepTime: 13,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Recipes', null, {});
  }
};

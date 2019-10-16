var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var Recipe = require('../../../models').Recipe;
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/', function(req, res, next) {
  Recipe.findAll()
    .then(recipes => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(recipes));
    })
    .catch(error => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).send({error})
    })
});

router.get('/calorie_search', function(req, res, next) {
  Recipe.findAll ({
    where: {
      calories: {
        [Op.between]: [req.query.q.split('-')[0], req.query.q.split('-')[1]]
      }
    }
  })
  .then(calories => {
    if (req.query.q.split('-').length == 2) {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(calories))
  } else {
      res.setHeader("Content-Type", "application/json");
      res.status(400).send(JSON.stringify("Be sure to send this request as a range separated with a '-'"))
  }
  })
  .catch(error => {
    res.setHeader("Content-Type", "application/json");
    res.setHeader(500).send({error})
  });
});

router.get('/food_search', function(req, res, next) {
  Recipe.findAll({
    where: {
      foodType: req.query.q
    }
  })
    .then(list => {
      res.setHeader("Content-Type", "application/json");
      if (list[0] == undefined) {
        let edamam = `https://api.edamam.com/search?q=${req.query.q}&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_APP_KEY}`
        fetch(edamam)
        .then(res => res.json())
        .then(result => result["hits"])
        .then(recipes => {
          var recipeData = []
          recipes.forEach(function(element) {
            var receta = {
              foodType: req.query.q,
              recipe: element.recipe.label,
              recipeUrl: element.recipe.url,
              servings: element.recipe.yield,
              ingredients: element.recipe.ingredients.length,
              calories: element.recipe.calories,
              prepTime: element.recipe.totalTime
            }
            recipeData.push(receta)
          })
            return res.status(200).send(recipeData);

          })
          .then(recipeData => {
            Recipe.bulkCreate(recipeData)
          })
          .then(createdRecipes => {

            res.status(201).send(JSON.stringify(createdRecipes))
            return createdRecipes
          })
        // .catch(error => {
        //
        //   res.status(500).send(JSON.stringify({error}));
        // })
      } else {

        res.status(200).send(JSON.stringify(list));
      }
    })
    .catch(error => {

      res.status(400).send(JSON.stringify("Don't forget to include the type of food you want to search for!"))
    });
});

router.get('/serving_search', function(req, res, next) {
  Recipe.findAll ({
    where: {
      servings: req.query.q
    }
  })
  .then(servings => {
    if (req.query.q.length == 0) {
      res.setHeader("Content-Type", "application/json");
      res.setHeader(400).send(JSON.stringify("Don't forget to send this request with a serving amount"))
    } else {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(servings))
    }
  })
  .catch(error => {
    res.setHeader("Content-Type", "application/json");
    res.setHeader(500).send(JSON.stringify("ERROR"))
  });
});

router.get('/sort_ingredients', function(req, res, next) {
  Recipe.findAll({
    where: {
      foodType: req.query.q
    },
    order: [
      ['ingredients', 'ASC']
    ]
  })
    .then(list => {
      if (list[0] == undefined) {
        let edamam = `https://api.edamam.com/search?q=${req.query.q}&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_APP_KEY}`
        fetch(edamam)
        .then(res => res.json())
        .then(result => result["hits"])
        .then(recipes => {
          var recipeData = []
          recipes.forEach(function(element) {
            var receta = {
              foodType: req.query.q,
              recipe: element.recipe.label,
              recipeUrl: element.recipe.url,
              servings: element.recipe.yield,
              ingredients: element.recipe.ingredients.length,
              calories: element.recipe.calories,
              prepTime: element.recipe.totalTime
            }
            recipeData.push(receta)
          })
            return Recipe.bulkCreate(recipeData)
          })
          .then(createdRecipes => {
            return Recipe.findAll({
              where: {
                foodType: req.query.q
              },
              order: [
                ['ingredients', 'ASC']
              ]
            })
          })
          .then(sortedRecipes => {
            res.setHeader("Content-Type", "application/json");
            res.status(201).send(JSON.stringify(sortedRecipes))
          })
        .catch(error => {
          res.setHeader("Content-Type", "application/json");
          res.status(500).send({error});
        })
      } else {
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(JSON.stringify(list));
      }
    })
    .catch(error => {
      res.setHeader("Content-Type", "application/json");
      res.status(400).send(JSON.stringify("Don't forget to include a type of food in your search!"))
    });
})

router.get('/average_calories', function(req, res, next) {
  Recipe.findAll({
    where: {
      foodType: req.query.q
    },
    attributes: [
      [Sequelize.fn('AVG', Sequelize.col('calories')), 'averageCalories']
    ]
  })
    .then(list => {
      if (list.attributes == undefined) {
        let edamam = `https://api.edamam.com/search?q=${req.query.q}&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_APP_KEY}`
        fetch(edamam)
        .then(res => res.json())
        .then(result => result["hits"])
        .then(recipes => {
          var recipeData = []
          recipes.forEach(function(element) {
            var receta = {
              foodType: req.query.q,
              recipe: element.recipe.label,
              recipeUrl: element.recipe.url,
              servings: element.recipe.yield,
              ingredients: element.recipe.ingredients.length,
              calories: element.recipe.calories,
              prepTime: element.recipe.totalTime
            }
            recipeData.push(receta)
          })
            return Recipe.bulkCreate(recipeData)
          })
          .then(createdRecipes => {
            return Recipe.findAll({
              where: {
                foodType: req.query.q
              },
              attributes: [
                [Sequelize.fn('AVG', Sequelize.col('calories')), 'averageCalories']
              ]
            })
          })
          .then(averageCalories => {
            res.setHeader("Content-Type", "application/json");
            res.status(201).send(JSON.stringify(averageCalories))
          })
        .catch(error => {
          res.setHeader("Content-Type", "application/json");
          res.status(500).send({error});
        })
      } else {
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(JSON.stringify(list));
      }
    })
    .catch(error => {
      res.setHeader("Content-Type", "application/json");
      res.status(400).send(JSON.stringify("Don't forget to include a type of food in your search!"))
    });
})


module.exports = router;

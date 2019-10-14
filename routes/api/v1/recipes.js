var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var Recipe = require('../../../models').Recipe;

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

router.get('/food_search', function(req, res, next) {
  Recipe.findAll({
    where: {
      foodType: req.query.q
    }
  })
    .then(list => {
      if (list[0] == undefined) {
        let edamam = `https://api.edamam.com/search?q=${req.query.q}&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_APP_KEY}`
        fetch(edamam)
        .then(response => response.json())
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
            return recipeData
          })
          .then(recipeData => {
            Recipe.bulkCreate(recipeData)
        })
          .then(createdRecipes => {
            res.setHeader("Content-Type", "application/json");
            res.status(201).send(JSON.stringify(createdRecipes))
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
      res.status(500).send({error})
    });
});

module.exports = router;

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

module.exports = router;

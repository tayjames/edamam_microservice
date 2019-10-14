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

module.exports = router;

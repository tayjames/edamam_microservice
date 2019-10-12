var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

router.get('/', function(req, res, next) {
  let edamam = `https://api.edamam.com/search?q=coconut&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_APP_KEY}`
  fetch(edamam)
  .then(response => response.json())
  .then(recipe => console.log(recipe["hits"]))
  // .then(console.log(req.body))
})

module.exports = router

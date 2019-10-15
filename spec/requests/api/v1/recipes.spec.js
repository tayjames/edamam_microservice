var shell = require('shelljs');
var request = require('supertest');
var app = require('../../../../app');
const fetch = require('node-fetch');
var Recipe = require('../../../../models').Recipe;

describe('Edamam API', () => {
  beforeAll(() => {
    shell.exec('npx sequelize db:create')
  });
  beforeEach(() => {
    shell.exec('npx sequelize db:migrate')
    shell.exec('npx sequelize db:seed:all')
  });
  afterEach(() => {
    shell.exec('npx sequelize db:migrate:undo:all')
  });

  test('GET /api/v1/recipes', () => {
    return request(app)
    .get('/api/v1/recipes')
    .then(response => {
      expect(response.statusCode).toBe(200);
    })
  })

  test('GET /api/v1/recipes/food_search?q=___ (stored in database)', async () => {
    return request(app)
    .get('/api/v1/recipes/food_search?q=Pineapple')
    .then(response => {
      console.log(response.statusCode)
      expect(response.statusCode).toBe(200),
      expect(response.body.length).toBe(5),
      expect(Object.keys(response.body[0])).toContain("foodType"),
      expect(Object.keys(response.body[0])).toContain("recipe"),
      expect(Object.keys(response.body[0])).toContain("recipeUrl"),
      expect(Object.keys(response.body[0])).toContain("servings"),
      expect(Object.keys(response.body[0])).toContain("ingredients"),
      expect(Object.keys(response.body[0])).toContain("calories"),
      expect(Object.keys(response.body[0])).toContain("prepTime")
    })
  } )

  test('Returns 500 status code when no query is sent to GET /api/v1/recipes/food_search?q=___', async () => {
    return request(app)
    .get('/api/v1/recipes/food_search?')
    .then(response => {
      expect(response.statusCode).toBe(500)
    })
  } )

  // test('GET /api/v1/recipes/food_search?q=___ (not stored in database)', async () => {
  //   return request(app)
  //   .get('/api/v1/recipes/food_search?q=artichoke')
  //   .then(response => {
  //     expect(response.statusCode).toBe(200),
  //     expect(response.body.length).toBe(10),
  //     expect(Object.keys(response.body[0])).toContain("foodType"),
  //     expect(Object.keys(response.body[0])).toContain("recipe"),
  //     expect(Object.keys(response.body[0])).toContain("recipeUrl"),
  //     expect(Object.keys(response.body[0])).toContain("servings"),
  //     expect(Object.keys(response.body[0])).toContain("ingredients"),
  //     expect(Object.keys(response.body[0])).toContain("calories"),
  //     expect(Object.keys(response.body[0])).toContain("prepTime")
  //   })
  // } )
})

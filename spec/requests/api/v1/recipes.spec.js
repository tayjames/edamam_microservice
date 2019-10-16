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

  test('GET /api/v1/recipes/calorie_search?q=calorie_count', () => {
  return request(app)
  .get('/api/v1/recipes/calorie_search?q=0-1000')
  .then(response => {
    expect(response.statusCode).toBe(200),
    expect(response.body.length).toBe(2)
  })
})

  test('Returns a 400 status code when only one part of range is sent to GET /api/v1/recipes/calorie_search?q=calorie_count', () => {
  return request(app)
  .get('/api/v1/recipes/calorie_search?q=0')
  .then(response => {
    expect(response.statusCode).toBe(400),
    expect(response.body).toBe("Be sure to send this request as a range separated with a '-'")
  })
})

  test('GET /api/v1/recipes/food_search?q=___ (stored in database)', () => {
    return request(app)
    .get('/api/v1/recipes/food_search?q=Pineapple')
    .then(response => {
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

  test('Returns 500 status code when no query is sent to GET /api/v1/recipes/food_search?q=___', () => {
    return request(app)
    .get('/api/v1/recipes/food_search?')
    .then(response => {
      expect(response.statusCode).toBe(500)
    })
  } )

  test('GET /api/v1/recipes/serving_search?q=number', () => {
  return request(app)
  .get('/api/v1/recipes/serving_search?q=6')
  .then(response => {
    expect(response.statusCode).toBe(200),
    expect(response.body.length).toBe(3)
  })
})

  test('GET /api/v1/recipes/sort_ingredients?q=food NOT IN DATABASE', () => {
  return request(app)
  .get('/api/v1/recipes/sort_ingredients?q=carrot')
  .then(response => {
    expect(response.statusCode).toBe(201),
    expect(response.body.length).toBe(10),
    expect(response.body[0].ingredients).toBeLessThanOrEqual(response.body[9].ingredients)
  })
})

  test('GET /api/v1/recipes/sort_ingredients?q=food IN DATABASE', () => {
  return request(app)
  .get('/api/v1/recipes/sort_ingredients?q=Coconut')
  .then(response => {
    expect(response.statusCode).toBe(200),
    expect(response.body.length).toBe(5),
    expect(response.body[0].ingredients).toBeLessThanOrEqual(response.body[4].ingredients)
  })
})

  test('GET /api/v1/recipes/sort_ingredients?q=food SAD PATH', () => {
  return request(app)
  .get('/api/v1/recipes/sort_ingredients?')
  .then(response => {
    expect(response.statusCode).toBe(500)
  })
})

  test('GET /api/v1/recipes/average_calories?q=food NOT IN DATABASE', () => {
  return request(app)
  .get('/api/v1/recipes/average_calories?q=carrot')
  .then(response => {
    expect(response.statusCode).toBe(201),
    expect(response.body.length).toBe(1),
    expect(response.body[0].averageCalories).toBe(615.426554183462)
  })
})

  test('GET /api/v1/recipes/average_calories?q=food IN DATABASE', () => {
  return request(app)
  .get('/api/v1/recipes/average_calories?q=Coconut')
  .then(response => {
    expect(response.statusCode).toBe(201),
    expect(response.body.length).toBe(1),
    expect(response.body[0].averageCalories).toBe(2993.10169415911)
  })
})

  // test('GET /api/v1/recipes/food_search?q=___ (not stored in database)', () => {
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

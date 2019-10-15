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

  test('GET /api/v1/recipes', async () => {
    return request(app)
    .get('/api/v1/recipes')
    .then(response => {
      expect(response.statusCode).toBe(200);
    })
  })

  test('GET /api/v1/recipes/calorie_search?q=calorie_count', async () => {
  return request(app)
  .get('/api/v1/recipes/calorie_search?q=0-1000')
  .then(response => {
    expect(response.statusCode).toBe(200),
    expect(response.body.length).toBe(2)
  })
})

  test('Returns a 400 status code when only one part of range is sent to GET /api/v1/recipes/calorie_search?q=calorie_count', async () => {
  return request(app)
  .get('/api/v1/recipes/calorie_search?q=0')
  .then(response => {
    expect(response.statusCode).toBe(400),
    expect(response.body).toBe("Be sure to send this request as a range separated with a '-'")
  })
})
})

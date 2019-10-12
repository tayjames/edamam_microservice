var shell = require('shelljs');
var request = require('supertest');
var app = require('../../../../app');
const fetch = require('node-fetch');


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
    return reqest(app)
    .get('/api/v1/recipes')
    .then(response => {
      expect(response.statusCode).toBe(200);
    })
  })
})

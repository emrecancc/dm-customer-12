const app = require('../src/app');
const request = require('supertest');
const server = app.listen(3199);

describe('Server', () => {
  it('should respond to GET /', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
  });
});

afterAll(() => {
  server.close();
});
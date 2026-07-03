const server = require('../src/server');
const request = require('supertest');

describe('Server', () => {
  beforeAll(() => {
    server.listen(3099);
  });

  afterAll(() => {
    server.close();
  });

  it('should respond to /health', async () => {
    const res = await request(server).get('/health');
    expect(res.status).toBe(200);
  });
});
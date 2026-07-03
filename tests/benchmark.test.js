const request = require('supertest');
const app = require('../src/app');

describe('Benchmark', () => {
  it('API responds within 400ms', async () => {
    const start = Date.now();
    await request(app).get('/api');
    const duration = Date.now() - start;
    expect(duration).toBeLessThan(400);
  });
});
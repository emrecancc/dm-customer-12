import request from 'supertest';
import app from '../app';

describe('Latency test', () => {
  it('API responds within 700ms', async () => {
    const start = Date.now();
    await request(app).get('/api/health');
    const duration = Date.now() - start;
    expect(duration).toBeLessThan(700);
  });
});
import { api } from '../src/api';

describe('API latency', () => {
  it('responds within 500ms', async () => {
    const start = Date.now();
    await api.get('/endpoint');
    const elapsed = Date.now() - start;
    expect(elapsed).toBeLessThan(500);
  });
});
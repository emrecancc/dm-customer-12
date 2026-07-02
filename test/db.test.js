const { User } = require('../models');
const sequelize = require('../models').sequelize;

beforeEach(async () => {
  await User.destroy({ where: {}, truncate: true });
});

describe('User model', () => {
  it('creates a user', async () => {
    const user = await User.create({ name: 'Alice' });
    expect(user.id).toBeDefined();
  });

  it('starts with empty database', async () => {
    const count = await User.count();
    expect(count).toBe(0);
  });
});
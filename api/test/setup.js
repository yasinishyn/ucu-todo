import models from '../app/models';
import logger from '../app/services/logger.service';

// eslint-disable-next-line no-undef
before('Clean Database', async () => {
  if (process.env.NODE_ENV === 'test') {
    // Clear db data for testing
    const sequelize = models.sequelize;
    await sequelize.sync({ force: true });
  } else {
    // Testing fixtures can override the real data in db.
    // this block of code is to ensure that tests are run under `test` env
    logger.error('Error: Run tests with `NODE_ENV=test`');
    process.exit();
  }
});

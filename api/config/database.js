const defaultConfig = {
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  dialect: 'sqlite',
  storage: './db/todo.sqlite',
  migrationStorageTableName: '_migrations',
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
    acquire: 10000
  }
};

const prodPool = {
  pool: {
    max: 50,
    min: 0,
    idle: 20000,
    acquire: 20000
  }
};

const database = {
  development: {
    ...defaultConfig
  },
  test: {
    ...defaultConfig,
    logging: false
  },
  production: {
    ...defaultConfig,
    ...prodPool,
    logging: false
  },
  staging: {
    ...defaultConfig,
    ...prodPool
  }
};

module.exports = database;
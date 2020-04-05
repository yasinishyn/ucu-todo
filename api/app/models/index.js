import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import { env } from '../../config/config.js';
import database from '../../config/database.js';

const config = database[env];
const basename = path.basename(module.filename);
const db = {};
let sequelize = null;

/**
 * Configure Sequalize
 */
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
  );
}

/**
 * Dynamically add all models defined inside this folder to Sequalize DB
 */
fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach(file => {
    let model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

/**
 * Dynamically add database associations and instance methdos
 */
Object.keys(db).forEach(modelName => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }

  if ('instanceMethods' in db[modelName]) {
    db[modelName].instanceMethods(db);
  }

  if ('loadScopes' in db[modelName]) {
    db[modelName].loadScopes(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;

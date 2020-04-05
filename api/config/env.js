// Load env file vars
const path = require('path');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const envFile = `.env${
  process.env.NODE_ENV === 'development' ? '' : '.' + process.env.NODE_ENV
}`;

module.exports = {
  configure() {
    require('dotenv').config({
      path: path.resolve(process.cwd(), envFile),
    });
  },
};

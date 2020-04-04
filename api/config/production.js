const port = Number.parseInt(process.env.PORT) || 3030;
const host = process.env.HOST || 'http://localhost';

module.exports = {
  port: port,
  hostName: `${host}:${port}`,
  serveStatic: true,
  assetHost: '',
  secretKeyBase: process.env.SECRET_KEY_BASE
};
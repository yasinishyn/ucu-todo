const port = Number.parseInt(process.env.PORT) || 3050;

module.exports = {
  port: port,
  hostName: '',
  assetHost: '',
  serveStatic: true,
  ssecretKeyBase: process.env.SECRET_KEY_BASE,
};

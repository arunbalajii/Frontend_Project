const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      // target: "http://52.142.30.237:9003",
        target: "http://localhost:9003",
      changeOrigin: true,
    })
  );
  app.use(
    "/sendHTMLEmailLink",
    createProxyMiddleware({
      target: "http://52.142.30.237:9002",
      changeOrigin: true,
    })
  );
};

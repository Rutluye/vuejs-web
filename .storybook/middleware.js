const proxy = require('http-proxy-middleware');

const SERVER = "https://www.mydeister.com";
const AUTH_TOKEN = "YW5nZWwuZmxvcmVhbm86QG5nZWwwNzAx";

module.exports = function expressMiddleware(router) {
    router.use('/service/rest/*', proxy.createProxyMiddleware({
        target: SERVER,
        changeOrigin: true,
        headers: {
            'Authorization': `Basic ${AUTH_TOKEN}`
        }
    }));
}
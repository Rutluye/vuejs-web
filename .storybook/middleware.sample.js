const proxy = require('http-proxy-middleware');

const SERVER = "https://www.mydeister.com";
const AUTH_TOKEN = "";

module.exports = function expressMiddleware(router) {
    router.use('/service/rest/*', proxy({
        target: SERVER,
        changeOrigin: true,
        headers: {
            'Authorization': `Basic ${AUTH_TOKEN}`
        }
    }));
}
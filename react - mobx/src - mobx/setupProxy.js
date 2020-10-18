const {createProxyMiddleware} = require("http-proxy-middleware")

module.exports = (app)=>{
    app.use(createProxyMiddleware('/ajax',{
        target:'https://m.maoyan.com',
        changeOrigin:true
    }))
}
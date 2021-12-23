const path = require('path')
function resolve(dir) {
   return path.join(__dirname, dir)
 }
module.exports = {
   /**
    * You will need to set publicPath if you plan to deploy your site under a sub path,
    * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
    * then publicPath should be set to "/bar/".
    * In most cases please use '/' !!!
    * Detail: https://cli.vuejs.org/config/#publicpath
    */
   publicPath: '/',
   outputDir: 'dist',
   assetsDir: 'static',
   lintOnSave: process.env.NODE_ENV === 'development',
   productionSourceMap: false,
   devServer: {
     port: 8080,
     open: true,
     overlay: {
       warnings: false,
       errors: true
     },
     // 配置反向代理
     proxy: {
       // 当地址中有/api的时候会触发代理机制
       '/api': {
         target: 'https://elm.cangdu.org/', // 要代理的服务器地址  这里不用写 api
         changeOrigin: true // 是否跨域
         // 重写路径
         // pathRewrite: {}
       }
     }
   },
   configureWebpack: {
     // provide the app's title in webpack's name field, so that
     // it can be accessed in index.html to inject the correct title.
     resolve: {
       alias: {
         '@': resolve('src')
       }
     },
     // 要排除的包名
     // key(是要排除的包名): value(实际上是实际引入的包的全局的变量名 )
     // 因为要排除element-ui 所以后面要引入CDN文件 CDN文件中有ELEMENTUI的全局变量名
     // externals首先会排除掉 定义的包名,空出来的位置  会用变量来替换
   }
}
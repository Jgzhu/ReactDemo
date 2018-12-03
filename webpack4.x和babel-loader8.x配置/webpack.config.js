const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlgin = new HtmlWebpackPlugin({
    // 配置成功之后会自动在内存中生成一个index.html文件，同时也是可以直接在页面的尾部追加一个main.js文件的
    template : path.join(__dirname, './src/index.html'),
    filename:'index.html'
})
module.exports={
    mode: 'development',//production
    plugins : [
        htmlPlgin
    ],
    module : {
        // 所有第三方模块的配置规则（Webpack默认只能打包js文件，对于其他vue，png，react是无法直接使用的）
        // 只要代码中有webpack不能识别的规则，就需要配置loader
        rules : [
            {test : /\.(js|jsx)$/, use : 'babel-loader', exclude : /node_modules/}  // 这里的exclude是不能少的
        ]
    }
}
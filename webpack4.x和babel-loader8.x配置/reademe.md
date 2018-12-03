##React webpack4.x和babel.loader8.x配置
1. 运行`npm init -y` 快速初始化项目
2. 在项目根目录创建`src`源代码目录和`dist`产品目录
3. 在 src 目录下创建 `index.html`
4. 使用 cnpm 安装 webpack ，运行`cnpm i webpack webpack-cli -D`
   + 如何安装 `cnpm`: 全局运行 `npm i cnpm -g`
5. 注意：webpack 4.x 提供了 约定大于配置的概念；目的是为了尽量减少 配置文件的体积；
   + 默认约定了：
   + 打包的入口是`src` -> `index.js`
   + 打包的输出文件是`dist` -> `main.js`
   + 4.x 中 新增了 `mode` 选项(为必选项)，可选的值为：`development` 和 `production`;

6.在根目录创建'webpack.config.js',并且配置
	```
	module.exports={
    mode: 'development'//production
	}
	```

7,运行webpack命令。dist文件夹自动生成	main.js文件。

8，配置自动webpack-dev-server，运行'cnpm i webpack-dev-server -D'和'cnpm i html-webpack-plugin -D'

9,'webpack.config.js'写成这样

```
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
}

```

 10,package.json文件脚本里面加入‘"dev": "webpack-dev-server"’
 
 11,运行‘npm run dev’
 
 12，安装babel[关键点]
 
 运行 
 	
 	‘cnpm i babel-loader -D’ 
  	'cnpm i @babel/core @babel/preset-env -D' 
  	'cnpm i @babel/preset-react -D'
  	'cnpm i react react-dom -S'


13,'webpack.config.js'配置

```
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

```
14,根目录下创建.babelrc文件
配置成

```
{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": []
}
```


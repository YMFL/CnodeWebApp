var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');//css前缀处理

var plugins = [];

var outpath = './build'
// 路径另外一种写法
// var outpath = path.resolve(__dirname, 'build');

module.exports = {
	devtool: 'eval',
    devServer: {
	    //API代理
        proxy: {
            "/api/*": {
                target: "https://cnodejs.org",
                secure: false
            }
        },
        contentBase: "./public",
        colors: true,
        historyApiFallback: true,
        host: '0.0.0.0',//可以通过http-server访问到 本机ip:9000
        port:9000,
        open:true,
        inline: true,
    },
    entry: [   //文件入口
        './src/index.js'
    ],
    output: {  //出口  编译后的文件
        path: outpath,
        publicPath: '/assets/', //文件夹名字
        filename: 'bundle.js' //js姓名

    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'// transpiling compiling  从右向左执行
            },
            {
                test: /\.less/,
                // exclude: [nodeModulesPath]用来排除不处理的目录
                exclude: path.resolve(__dirname, 'src/styles'),
                loader: 'style!css?modules!postcss!less'
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src/styles'),
                loader: 'style!css'
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url?limit=50000&name=[path][name].[ext]'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: plugins,
    postcss: [autoprefixer]
};

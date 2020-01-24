const path  = require('path');
const dotEnv = require('dotenv/config')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    mode:process.env.ENVIRONMENT_MODE,
    entry: path.resolve(__dirname,'src/main.js'),
    output : {
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test: /\.js$/ ,
                loader:'babel-loader',
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname, 'src/index.html'),
            filename: path.resolve(__dirname, 'dist/index.html')
        })
    ]
}
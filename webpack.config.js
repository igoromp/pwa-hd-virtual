const path  = require('path');
const dotEnv = require('dotenv/config')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    mode:process.env.ENVIRONMENT_MODE,
    entry: path.resolve(__dirname,'src/main.js'),
    output : {
        path: path.resolve(__dirname, 'dist')
    },
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        port:process.env.DEV_SERVER_PORT
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                use:[
                    {
                        loader: '@sucrase/webpack-loader',
                        options: {
                            transforms: ['jsx']
                        }
                    }
                ],
                exclude: /node_modules/,
                enforce:"pre"
              },
              {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: process.env.ENVIRONMENT_MODE ==='production'?true: false,
                        }
                    }
                ]
              },
            {
                test: /\.(s*)css$/ ,
                use:['style-loader', 'css-loader', 'sass-loader', 'resolve-url-loader'],
                include: [
                    path.join(__dirname, 'src'),
                    /node_modules/
                  ],
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name: "static/media/[name].[hash:8].[ext]",
                },
            },
            {
                test: [/\.eot$/, /\.ttf$/, /\.svg$/, /\.woff$/, /\.woff2$/],
                loader:"file-loader",
                options: {
                    name: "/static/media/[name].[hash:8].[ext]",
                },
            }
        ]
    },
    devtool: 'inline-source-map',
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname, 'src/index.html'),
            filename: path.resolve(__dirname, 'dist/index.html')
        })
    ],
}
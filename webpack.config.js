const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: {
        app: './src/index.js',
    },
    
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '',
        filename: 'main.js',
    },

    mode: 'development',

    devServer: {
        contentBase: path.join(__dirname, "/dist"),
        port: 1233,
        writeToDisk: true,
        open: true,
    },
    
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true,
                        },
                    },  
                ],                
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: "images",
                }  
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
            },
        ],
    },
      
    plugins: [
        new MiniCssExtractPlugin({ filename: 'css/style.css' }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        }),
    ],
};
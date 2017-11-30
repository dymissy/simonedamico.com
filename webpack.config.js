const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: {
        'js/app': './assets/js/app.js',
        'css/style': './assets/sass/import.scss'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js',
        sourceMapFilename: '[name].[chunkhash].map'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules(?!\/webpack-dev-server)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                }),
                exclude: __dirname + '/node_modules'
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: './img/[name].[ext]',
                    publicPath: '../'
                }
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: __dirname + '/assets/images',
            to: __dirname + '/dist/images'
        }]),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new ExtractTextPlugin('[name].[chunkhash].css'),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({template: './index.html'})
    ]
};

module.exports = config;
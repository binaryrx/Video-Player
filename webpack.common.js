const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',

    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            '#': path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
            //config for es6 jsx
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            //config for scss compilation
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader // 3. injects styles into DOM
                    },
                    'css-loader', // 2. turns css into CommonJs
                    {
                        loader: 'sass-loader' // 1. Turns scss into Css
                    }
                ]
            },
            //config for images
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                        }
                    }
                ]
            },
            //config for videos
            {
                test: /\.(mp4|avi|mkv|mov)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                          } 
                    }
                ]
            },
            //config for fonts
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts',
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ["*.*", "css/*.*", "js/*.*", "fonts/*.*", "images/*.*"]
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css'
        }),

    ],
}
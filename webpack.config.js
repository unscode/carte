const path = require("path");
const webpack = require('webpack');
const FaviconWebpackPlugin = require("favicons-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const Dotenv = require("dotenv-webpack");

module.exports = (env, argv) => {
    const config = {
        mode: "development", // "production" | "development" | "none"
        entry: {
            home: [
                "./src/assets/styles/sass/home/home.scss",
                "./src/assets/js/home/home.js"
            ],
        },
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "[name].[contenthash].js"
        },
        performance: {
            hints: "warning"
        },
        optimization: {
            runtimeChunk: 'single',
            minimizer: [new TerserPlugin({
                sourceMap: true,
            })],
            splitChunks: {
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all'
                    }
                }
            }
        },
        devtool: argv.mode === "production" ? "source-map" : "eval",
        devServer: {
            bonjour: true,
            contentBase: path.join(__dirname, "src"),
            compress: true,
            port: 9000
        },
        module: {
            rules: [
                {
                    test: /\.(html)$/,
                    use: {
                        loader: "html-loader",
                        options: {
                            attrs: ["img:src"],
                            minimize: argv.mode === "production",
                            removeComments: argv.mode === "production",
                            collapseWhitespace: argv.mode === "production",
                            minifyJS: argv.mode === "production",
                            removeRedundantAttributes: argv.mode === "production"
                        }
                    }
                },
                {
                    test: /\.(js)$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env",
                            ]
                        }
                    }
                },
                {
                    test: /\.(sass|scss)$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        "css-loader",
                        "sass-loader"
                    ]
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "[hash].[ext]",
                                outputPath: "images/"
                            }
                        }
                    ]
                },
                {
                    test: /\.(woff(2)?|ttf|eot)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "[hash].[ext]",
                                outputPath: "fonts/"
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new webpack.ProgressPlugin(),
            new HtmlWebpackPlugin({
                template: "src/views/home/index.ejs",
                chunks: ["runtime", "vendors", "home"],
                minify: {
                    collapseWhitespace: argv.mode === "production",
                    removeComments: argv.mode === "production",
                    removeRedundantAttributes: argv.mode === "production",
                    removeScriptTypeAttributes: argv.mode === "production",
                    removeStyleLinkTypeAttributes: argv.mode === "production",
                    useShortDoctype: argv.mode === "production"
                }
            }),
            new MiniCssExtractPlugin({
                filename: "[name].[contenthash].css"
            }),
            new FaviconWebpackPlugin({
                logo: "./src/assets/favicon/brand.png",
                mode: 'webapp',
                devMode: 'webapp',
                title: "Cartê"
            }),
            new WorkboxPlugin.GenerateSW({
                clientsClaim: true,
                skipWaiting: true
            }),
            new Dotenv(),
        ],
    };
    if (argv.mode === "production") {
        config.plugins = config.plugins.concat([
            new CleanWebpackPlugin(),
        ])
    }
    return config;
};

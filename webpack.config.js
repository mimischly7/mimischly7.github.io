const path = require("path");
// needed to include index.html in dist
const HtmlWebpackPlugin = require('html-webpack-plugin');
// needed to include images folder and other assets in dist (md articles, e.t.c.)
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        // publicPath: '/' /* Does not appear necessary */
    },
    /* Does not appear necessary */
    // devServer: {
    //     // historyApiFallback: true
    // },
    module: {
        rules: [
            {
                test: /.(jsx?)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options:{
                        presets: [
                            ["@babel/preset-env",
                                /* do not appear necessary */
                                /*{ useBuiltIns: "usage", core-js: 3 }*/
                            ],
                            ["@babel/preset-react",
                                /* if you don't want to manually import react to use jsx syntax */
                                { runtime: "automatic" }
                            ],
                        ]
                    }
                },
            },
            {
                test: /\.css$/i,
                /** style-loader strictly necessary, dont konw why **/
                use: ["style-loader", "css-loader"],
            },
            /* not correct */
            // {
            //     test: /\.jpe?g$|\.gif$|\.png$|\.PNG$|\.svg$|\.woff(2)?$|\.ttf$|\.eot$/,
            //     loader: 'file-loader',
            //     options: {
            //         name: '[name].[ext]'
            //     }
            // }
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        // needed to include index.html in dist
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),

        // needed to include images folder and other assets in dist (md articles, e.t.c.)
        new CopyPlugin({
            patterns: [
                { from: "src/images", to: "images" },
                { from: "src/data", to: "data" },
            ],
        })
    ],
};
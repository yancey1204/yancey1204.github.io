const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
import RemarkHTML from "remark-html";
import RemarkFrontmatter from "remark-frontmatter";

module.exports = {
    mode: 'development',
    entry: {
        index: "./src/index.tsx",
        // blogs: "./src/blogs/blogs.jsx",
    },
    output: {
        filename: "./build/[name].bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "fonts/",
                        },
                    },
                ],
            },
            {
                test: /\.md$/,
                use: [
                    {
                        loader: "html-loader",
                    },
                    {
                        loader: "remark-loader",
                        options: {
                            removeFrontMatter: false,
                            remarkOptions: {
                                plugins: [RemarkHTML, RemarkFrontmatter],
                            },
                        },
                    },
                ],
            },
        ],
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".md"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ],
    devServer: {
        port: 8080,
        open: true,
        hot: true,
        inline: true,
        historyApiFallback: true,
    },
};

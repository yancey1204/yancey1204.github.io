var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
    entry: {
        main:"./src/components/main.jsx",
        about:"./src/components/test.jsx"
    },
    output: {
        filename: "./assets/js/[name].bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {test: /\.scss$/, loaders: ["style", "css", "sass"]},
            { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url?limit=10000!img?progressive=true' }
        ]
    },
    plugins: [
        new CommonsChunkPlugin({
            name: "commons",
            filename: "assets/js/common.js"
        })
    ]
};
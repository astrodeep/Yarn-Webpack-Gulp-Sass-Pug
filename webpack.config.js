var webpack = require('webpack');

module.exports = {
    output: {
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        ['latest', { modules: false }],
                    ],
                },
            },
            {
                test: require.resolve('wow.js/dist/wow.js'),
                loader: 'exports?this.WOW'
            }
        ],
    },
    plugins: [

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),

    ],
    mode: 'development'

};

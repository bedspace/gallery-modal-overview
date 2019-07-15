const path = require('path');

module.exports = {
    entry: './client/src/index.jsx',
    output: {
        path: path.resolve(__dirname, './client/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ],
                exclude:  /node_modules/
            }

        ]
    },
    mode: 'development'
}
// style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]
// , options:{modules:true,localIdentName:'[path][name]__[local]--[hash:base64:5]'}
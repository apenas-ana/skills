const webpack = require('webpack')

module.exports = {
    entry: './ex/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public' // não sei o que é ContentBase -> pesquisar
    },
    module: {
        loaders: [{
            test: /.jsx?$/, // entender expressões regulares
            loader: 'babel-loader',
            exclude: '/node_modules/',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}
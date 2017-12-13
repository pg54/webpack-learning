const webpack = require('webpack')
const htmlwebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')

const basicConfig = {
    entry: {
        'js/app': [resolve(__dirname, '../index.js')]
    },
    output: {
        path: resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    plugins: [
        const htmlwebpackPlugin({
            filename: 'index.html',
            template: resolve(__dirname, '../htmlTpl.tpl'),
            inject: true,
            chunks: ['js/app']
        })
    ]
}
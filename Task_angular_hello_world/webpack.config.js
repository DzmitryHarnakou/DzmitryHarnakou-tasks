const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'app': './src/main.ts'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './public',
        overlay: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html',
            filename: './index.html' 
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },

    output: {
        path: path.resolve(__dirname, './public'),
        filename: "[name].js"
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },

        ]
    }

};


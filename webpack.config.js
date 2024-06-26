const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  watch: true,
   watchOptions: {
    ignored: /node_modules/,
  },

  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: 'head',
        scriptLoading: 'defer',
        

    })
  ],

  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
          type: 'asset/resource',
        },
        {

          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
  
        },
    ],
  },
};
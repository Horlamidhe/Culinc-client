const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/index.js',
   output: {
      path: path.join(__dirname, 'dist','assets'),
      filename: 'bundle.js'
   },
   devtool:'#source-map',
   module: {
      rules: [
         {
            test: /\.(js|jsx)?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
               presets: ['env','stage-0', 'react']
            }
         },
         {
            test: /\.css?$/,
            use: ['style-loader','css-loader',{
               loader: 'postcss-loader',
               options: {
                  plugins: () => [require('autoprefixer')]
               }}, 'sass-loader']
         },
         {
            test: /\.scss?$/,
            use: ['style-loader','css-loader',{
               loader: 'postcss-loader',
               options: {
                  plugins: () => [require('autoprefixer')]
               }}, 'sass-loader']
         },
         {
            test: /\.(png|jpeg|jpg|gif)$/,
            loader: 'url-loader'
          }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './index.html'
      })
   ]
}
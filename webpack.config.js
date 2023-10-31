const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageminPlugin = require('image-minimizer-webpack-plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports={
    mode: "development",
    entry: './src/app.js',
    output: {
        path:path.resolve(__dirname,'dist'),
        filename: "js/script.js"

    },
    plugins: [
      //new HtmlWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: "css/[name].css",
      }),
      new HtmlWebpackPlugin({
      template: './src/main.html',
      filename: 'index.html',
       chunks: ['main'], // Use 'main' as the entry point or chunk name
    }),
    ],
    //Loadar
    module: {
      rules: [
        {
          test: /\.scss$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
         {
        test: /\.(png|svg|jpe?g|gif)$/i, 
        //type: 'asset/resource',
        generator: {
          // adding a hash to the file
          filename: 'images/[name][ext]',
        },
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images',
              publicPath:'images',
              emitFile: true,
              esModule: false

            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75
              }
            },
          },
        ],
      },
      ],
    },
    
    //Loadar
    devServer: {
        static: {
          directory: path.join(__dirname, "dist")
        },
    
        compress: false,
        port: 3010, // default 8000
      },

}
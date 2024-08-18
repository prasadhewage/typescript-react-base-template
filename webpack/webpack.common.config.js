import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

const projectRoot = process.cwd();

export default {
  entry: path.resolve(projectRoot, 'src/index.tsx'),
  module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          include: path.resolve(projectRoot, 'src'),
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
      ],
    },
  resolve: {
      extensions: ['.tsx', '.ts', '.js'],
  },    
  output: {
      clean: true,
      path: path.resolve(projectRoot, 'dist'),
      publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: path.resolve(projectRoot, 'src/index.html')
      }
    )
  ]
}
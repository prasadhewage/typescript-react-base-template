import {merge} from "webpack-merge";
import webpackCommonConfig from "./webpack.common.config.js";

const projectRoot = process.cwd();

export default merge(webpackCommonConfig, {
  mode: 'development',
  devServer: {
    hot: true,
    port: 3001,
    open: true,
    historyApiFallback: true,
  },
  devtool: 'source-map'
})
import {merge} from "webpack-merge";
import webpackCommonConfig from "./webpack.common.config.js";

const projectRoot = process.cwd();

export default merge(webpackCommonConfig, {
  mode: 'production'
})
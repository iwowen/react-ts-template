const path = require("path");

const ROOTPATH = path.resolve(__dirname, "../");
const isDev = process.env.NODE_ENV !== "production";

module.exports = {
  ROOTPATH,
  isDev,
};

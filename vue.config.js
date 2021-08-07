/* eslint-disable */
module.exports = {
  devServer: {
    disableHostCheck: true
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "~@/styles/index.scss";`
      }
    }
  }
};

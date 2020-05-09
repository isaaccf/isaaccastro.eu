module.exports = {
chainWebpack: (config) => {
  config.module
  .rule('vue')
      .use('vue-loader')
        .loader('vue-loader')
        .end()
  .rule('css')
  .test(/\.css$/)
  .use('style-loader')
    .loader('style-loader')
    .end()
  // Add another loader
  .use('css-loader')
    .loader('css-loader')
    .end()
  }
}
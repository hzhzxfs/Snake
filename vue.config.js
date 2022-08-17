const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: "/mystore/",
  outputDir: 'docs',
  transpileDependencies: true
})

const path = require('path')

module.exports = {
  // 1.配置方式一: CLI提供的属性
  outputDir: './dist',

  devServer: {
    proxy: {
      '/api': {
        target: 'http://152.136.185.210:4000/',
        pathRewrite: {
          '^/api': ''
        },
        changOrigin: true
      }
    }
  },
  productionSourceMap: false,
  chainWebpack: (config) => {
    /* 添加分析工具*/
    if (process.env.NODE_ENV === 'production') {
      if (process.env.npm_config_report) {
        config
          .plugin('webpack-bundle-analyzer')
          .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
          .end()
        config.plugins.delete('prefetch')
      }
    }
  },
  // 2.配置方式二: 和webpack属性完全一致, 最后会进行合并
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    },
    optimization: {
      // miniSize: true,
      splitChunks: {
        chunks: 'all',
        minChunks: 2,
        cacheGroups: {
          default: true,
          vendors: true
          // common: {
          //   chunks: 'all',
          //   minChunks: 2,
          //   name: 'common',
          //   enforce: true,
          //   priority: 5
          // },
          // vendor: {
          //   test: /[\\/]node_modules[\\/]/,
          //   chunks: 'all',
          //   enforce: true,
          //   // maxSize: 500,
          //   priority: 10,
          //   name: 'vendor'
          //   // reuseExistingChunk: true
          // }
        }
      }
    }
  }
}

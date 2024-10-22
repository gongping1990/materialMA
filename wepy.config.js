const path = require('path');
var prod = process.env.NODE_ENV === 'production';

module.exports = {
  wpyExt: '.wpy',
  eslint: false,
  cliLogs: !prod,
  build: {
  },
  resolve: {
    alias: {
      counter: path.join(__dirname, 'src/components/counter'),
      '@': path.join(__dirname, 'src')
    },
    aliasFields: ['wepy', 'weapp'],
    modules: ['node_modules']
  },
  compilers: {
    less: {
      compress: prod
    },
    sass: {
      outputStyle: 'compressed'
    },
    babel: {
      sourceMap: true,
      presets: [
        'env'
      ],
      plugins: [
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-object-rest-spread',
        'transform-export-extensions',
      ]
    }
  },
  plugins: {
  },
  appConfig: {
    noPromiseAPI: ['createSelectorQuery'],
    baseUrl: process.env.NODE_ENV === 'production' ? 'https://huoke.prod.k12.vip/material' : 'https://huoke.prod.k12.vip/material'
  }
}

if (prod) {

  // 压缩sass
  // module.exports.compilers['sass'] = {outputStyle: 'compressed'}

  // 压缩js
  module.exports.plugins = {
    uglifyjs: {
      filter: /\.js$/,
      config: {
      }
    },
    imagemin: {
      filter: /\.(jpg|png|jpeg)$/,
      config: {
        jpg: {
          quality: 80
        },
        png: {
          quality: 80
        }
      }
    },
    // 'px2units': {
    //   filter: /\.wxss$/
    //   // 忽略 abc.wxss 文件示例
    //   // filter: /(?<!\/abc)\.wxss$/i
    // },
  }
} else {
  // module.exports.plugins = {
  //   'px2units': {
  //     filter: /\.wxss$/
  //     // 忽略 abc.wxss 文件示例
  //     // filter: /(?<!\/abc)\.wxss$/i
  //   },
  // };
}

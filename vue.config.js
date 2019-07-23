const path = require('path')
module.exports = {
  // baseUrl: '/vApp1/',
  baseUrl: '/vue/',
  outputDir: '../buildend/',
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,

  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },

  devServer: {
	    // 设置主机地址
	    host: 'localhost',
	    // 设置默认端口
	    port: 8080,
	    // 设置代理
			// proxy: 'http://xxx.xxxxxx.xxx',
	    proxy: {
	        /* '/mock1': {
	            // 目标 API 地址
	            target: 'http://localhost:3000',
	            // 如果要代理 websockets
	            ws: true,
	            // 将主机标头的原点更改为目标URL
	            changeOrigin: false,
	            pathRewrite: {
		          '^/mock1': '/API/tests/' // 代理的路径	//"http://localhost:3000/tests/"
		        }
	        },
	        '/mock2': {
	            // 目标 API 地址
	            target: 'http://localhost:3000/API/tests/',
	            // 如果要代理 websockets
	            ws: true,
	            // 将主机标头的原点更改为目标URL
	            changeOrigin: true,
	            pathRewrite: {'^/mock2' : ''}
	        }, */
	        '/API': {
	            target: 'http://localhost:3000',
	            ws: true,
	            changeOrigin: false,
	            pathRewrite: {
		          '^/API': '/API/'
		        }
	        },
	        '/DomainM': {
	            target: 'http://test.m.icaibei.net',
	            ws: true,
	            changeOrigin: true,
	            pathRewrite: {
		          '^/DomainM': ''
		        }
	        }
	    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: 'D:\\changsha\\myApp\\src\\assets\\less\\base.less'
    },
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}

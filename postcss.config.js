module.exports = {
  'plugins': {
    'autoprefixer': {},
    'postcss-plugin-px2rem': {
    	'rootValue': 50,	// 设计稿十分之一
      'propList': ['*']
    }
  },

  plugins: {
    autoprefixer: {},
    'postcss-plugin-px2rem': {
      rootValue: 50,
      propList: [
        '*'
      ]
    },
    'postcss-px2rem': {
      remUnit: 37.5
    }
  }
}

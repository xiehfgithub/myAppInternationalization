export default {
  hello (state, platform) {
    state.hello = '改变一下吧'
  },
  anchor (state, platform) {
  	console.log('来自mutations.js: ---%O---', platform)
    state.xhfHello = '我是当前页面的state 全局xhfHello数据【mutation转换】==>' + platform
  },
  ChangeHeaderBarPage_sexIndexAct (state, platform) {
  	console.log(platform)
    state.headerBarPage.sexIndexAct = platform
  }
}

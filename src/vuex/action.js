export default {
  hello ({ commit }, platform) {
    commit('hello', platform)
  },
  anchor ({ state, commit, rootState }, platform) {
  	// platform = 123321;
  	console.log('来自actions.js: ---%O---%O---%s', state, rootState, platform)
  	commit('xhfHello', platform)
  },
  ChangeHeaderBarPage_sexIndexAct ({ commit }, platform) { // 切换男生|女生类型 跟换请求数据
  	// console.log(platform);
    commit('ChangeHeaderBarPage_sexIndexAct', platform)
  }
}

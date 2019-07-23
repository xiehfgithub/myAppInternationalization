<template>
	<div>
		<HeaderNav :backIcon='true' :FnRightToolCallBack='showToastTime' />
		<div @click="fnHandle">{{pageData}}</div>

		<hr>
		<cube-switch v-model="switchValue">
			cube-ui swicth 按钮
		</cube-switch>
		<cube-button @click="showToastTime">Toast - time 2s</cube-button>
		<cube-button @click="showToastTime0">Toast - time 0s一直显示,直到手动取消</cube-button>
	</div>
</template>

<script>
	import HeaderNav from '@/components/HeaderNav/HeaderNav.vue'
	export default {
		name: 'demoPage',
		data: function() {
			return {
				pageData: 12345,
				axiosData: "default",
				switchValue: true
			}
		},
		components: {
			HeaderNav
		},
		created: function() {
			console.log(this.pageData);
		},
		methods: {
			fnHandle() { // mint-ui toast    this.$toast('提示信息');
				let instance = this.$toast({
					message: '‘提示提示提示提示提示‘', //提示内容分
					position: '‘bottom‘', //提示框位置
					duration: 5000, //持续时间（毫秒），若为 -1 则不会自动关闭
					iconClass: '‘icon icon-success‘ ', //icon 图标的类名
					className: '‘addToastClass‘' //Toast 的类名。可以为其添加样式
				});
				setTimeout(() => {
					instance.close();
				}, 2000)
				// 				let url = '/DomainM/article/data/1041312'
				// 				var that = this
				// 				this.axios.get(url, {
				// 					params: {
				// 
				// 					},
				// 					headers: {
				// 						token: 'hf-token1'
				// 					}
				// 				}).then(function(res) {
				// 					// console.log('axios get模式请求【同$.get】:%O', res.data)
				// 					that.axiosData = res.data;
				// 					console.log(axiosData);
				// 
				// 				}).catch(function(err) {
				// 					console.log(err)
				// 				})
			},
			showToastTime() { //cube-ui Toast
				const toast = this.$createToast({
					time: 2000,
					txt: 'Toast time 1s',
					mask: true
				})
				toast.show()
			},
			showToastTime0() { //cube-ui Toast 一直展示
				const toast = this.$createToast({
					time: 0,
					txt: 'Toast time 0'
				})
				toast.show()
				setTimeout(() => {
					toast.hide()
				}, 2000)
			}

		},
		computed: {

		},
		filters: {

		},
		watch: {
			switchValue: function() {
				console.log(`switch按钮值为${this.switchValue}`);
			}
		}
	}
</script>

<style scoped lang="less">
	@import '../../assets/common.less';
</style>

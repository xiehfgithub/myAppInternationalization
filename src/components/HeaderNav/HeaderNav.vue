<!--导航栏组件-->
<template>
	<div id="nav">
		<header class="mint-header">
			<div class="mint-header-button is-left" v-if="backIcon">
				<!-- <router-link to="/" class="router-link-active">
					<button class="mint-button mint-button--default mint-button--normal hf-back">
						<span class="mint-button-icon"><i class="mintui mintui-back"></i></span>
						<label class="mint-button-text">返回</label>
					</button>
				</router-link> -->
				<button class="mint-button mint-button--default mint-button--normal hf-back" @click="fnGoPrePage">
					<span class="mint-button-icon"><i class="mintui mintui-back"></i></span>
					<label class="mint-button-text">返回</label>
				</button>
			</div>
			<h1 class="mint-header-title">{{title?title:"默认标题"}}</h1>
			<div class="mint-header-button is-right" v-if="typeof FnRightToolCallBack == 'function'" @click="FnRightToolCallBack">
				<button class="mint-button mint-button--default mint-button--normal">
					<span class="mint-button-icon"><i class="mintui mintui-more"></i></span>
					<label class="mint-button-text"></label>
				</button>
			</div>
		</header>

		<template v-if="false" v-for="(nav,navIndex) in navList">
			<router-link :to="nav.to" :class="{
			      	'router-link-exact-active': $route.name==nav.to,
			      	'router-link-active': $route.name==nav.to
			  	}">{{navIndex==navList.length-1?nav.title:nav.title + " | "}}
			</router-link>
		</template>

	</div>
</template>

<script>
	export default {
		name: 'HeaderNav',
		data: function() {
			return {
				navList: [
					/* {
						to:"/home",
						title: "Home"
					}, */
					{
						to: '/index',
						title: 'Index'
					},
					{
						to: '/about',
						title: 'About'
					}
				]
			}
		},
		props: {
			name: String,
			title: String,
			backIcon: Boolean,
			FnRightToolCallBack: Function
		},
		created: function() {
			console.log(this.$route);
			console.log(`左侧返回按钮显示状态:${this.backIcon == true}`);
			console.log(`右侧操作栏回调函数:${typeof this.FnRightToolCallBack == 'function'}`)
		},
		methods:{
			fnGoPrePage: function () {
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped lang="less">
	// @import '../../assets/common.less';
	#nav {
		width: 100%;
		padding: 0;
	}
	.mint-header-button .hf-back{
		color: #ffffff;
	}
</style>

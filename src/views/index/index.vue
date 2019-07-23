<template>
	<div class="index">
		<HeaderBar></HeaderBar>
		<router-link :to="{path: 'demoPage'}" class="router-link-active">示范模板页</router-link>
		
		<mt-swipe class="index-swiper borderbot-1" @change="handleChange" :auto="20000" :speed="1000" :defaultIndex="0" :stopPropagation="true">
			<mt-swipe-item>
				<img alt="Vue logo" v-lazy="'https://img.cdn.icaibei.net/banner/201812/f50ba05c5442c7bc0d89c891afdb385f.png!app_banner1'" />
			</mt-swipe-item>
			<mt-swipe-item>
				<img alt="Vue logo" v-lazy="'https://img.cdn.icaibei.net/banner/201808/96295cd72a5a9a6b5f3b568dc43c4b80.png!app_banner1'" />
			</mt-swipe-item>
			<mt-swipe-item>
				<img alt="Vue logo" v-lazy="'https://img.cdn.icaibei.net/avatar/201807/ab3f8116d86d53857283da54e4f9fe45.png!app_banner1'" />
			</mt-swipe-item>
			<mt-swipe-item>
				<img alt="Vue logo" v-lazy="'https://img.cdn.icaibei.net/banner/201805/d821e2899d3ae2e24cbbe0182d2f9436.png!app_banner1'" />
			</mt-swipe-item>
			<mt-swipe-item>
				<img alt="Vue logo" v-lazy="'https://img.cdn.icaibei.net/banner/201804/7e2095eba1128b50137f6dd49c94ea3d.jpg!app_banner1'" />
			</mt-swipe-item>
			<mt-swipe-item>
				<img alt="Vue logo" v-lazy="imgLazy" />
			</mt-swipe-item>
		</mt-swipe>
		<div class="desc">{{$store.state.headerBarPage.sexIndexAct}}</div>
		
		
		<!--开发页面-->
		<hr />
		<router-link class="index-nav-item" to="/index">Index</router-link>
		<router-link class="index-nav-item" to="/home"> Home</router-link>
		<router-link class="index-nav-item" to="/about"> About</router-link>
		<router-link class="index-nav-item" to="/gjh"> 国际化首页</router-link>
	</div>
</template>

<style lang="less" scoped>
	.index-swiper{
		width: 100%;
		height: 106px;
		height: 126px;
	}
	/*用/deep/穿透scoped修改UI框架默认值*/
	.index-swiper /deep/ .mint-swipe-indicator.is-active{
		background: #FFA42F;
		opacity: 0.5;
	}
	.desc {
		font-size: 15px;
		color: @color;
	}
	.goods-list{
		background: @buttombg;
	}
	.line3{
		.textLine(4)
	}
	.index-nav-item{
		display: block;
		margin: 20px auto;
	}
</style>

<script>
import HeaderBar from '@/components/HeaderBar/HeaderBar.vue'
import _img from '@/assets/xhf.png'	// 懒加载图片
export default {
  name: 'index',
  data: function () {
    return {
      pageData: 0,
      img: 'https://img.cdn.icaibei.net/avatar/072d9042fc465c11fabe1e67cec1d1d0.jpg!app_user_avatar210',
      imgLazy: _img
    }
  },
  components: {
    HeaderBar
  },
  created: function () {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~Index.vue~~~~~~~~~~~~~~~~~~~~~~~~~~')
  },
  methods: {
    handleChange (index) {
      // console.log(index)
    }
  }
}
</script>

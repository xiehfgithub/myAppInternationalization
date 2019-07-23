<!--首页顶部：仿起点中文网头-->
<template>
	<div id="nav">
		<div class="title">
			<img class="logo" src="@/assets/xhf.png" />
			海锋叉叉网
		</div>
      	<div class="flex-sex">
      		<div :class="{
      			'flex-sex-item': true,
      			'flex-sex-item-act': $store.state.headerBarPage.sexIndexAct == 0
      		}" @click="ChangeHeaderBarPage_sexIndexAct(0)">男生</div>
      		<div :class="{
      			'flex-sex-item': true,
      			'flex-sex-item-act': $store.state.headerBarPage.sexIndexAct == 1
      		}" @click="$store.dispatch('ChangeHeaderBarPage_sexIndexAct',1)">男生</div>
      		<div :class="{
      			'flex-sex-item': true,
      			'flex-sex-item-act': $store.state.headerBarPage.sexIndexAct == 2
      		}" @click="$store.dispatch('ChangeHeaderBarPage_sexIndexAct',2)">男生</div>
      		<div :class="{
      			'flex-sex-item': true,
      			'flex-sex-item-act': $store.state.headerBarPage.sexIndexAct == 3
      		}" @click="$store.dispatch('ChangeHeaderBarPage_sexIndexAct',3)">女生</div>
      		<div :class="{
      			'flex-sex-item': true,
      			'flex-sex-item-act': $store.state.headerBarPage.sexIndexAct == 4
      		}" @click="$store.commit('ChangeHeaderBarPage_sexIndexAct',4)">都看</div>
      	</div>

    </div>
</template>

<script>
export default {
  name: 'HeaderBar',
  data: function () {
    return {

    }
  },
  props: {

  },
  created: function () {
    console.log(this.$route)
    console.log(this.$store)
    console.log('================HeaderBar==================')
  },
  methods: {
    ChangeHeaderBarPage_sexIndexAct: function (type) {
      var that = this
      return that.$store.dispatch('ChangeHeaderBarPage_sexIndexAct', type)
      //				if(type == that.$store.state.headerBarPage.sexIndexAct){
      //					return console.log("同类型不需要切换请求数据");
      //				}else{
      //					//that.$store.commit('ChangeHeaderBarPage_sexIndexAct', type);
      //					that.$store.dispatch("ChangeHeaderBarPage_sexIndexAct",type);
      //
      //
      //				}
    }
  }
}
</script>

<style scoped lang="less">
	#nav{
		height: 44px;
		position: relative;
		background-color: #ccc;
		padding-left: 130px;
		padding-top: 7px;
		box-sizing: border-box;
	}
	.title{
		width: 100px;
		height: 34px;
		position: absolute;
		top: 5px;
		left: 0;
		color: transparent;
	}
	.logo{
		display: block;
		height: 100%;
	}
	.flex-sex{
		display: flex;
		justify-content: space-between;
		width: 200px;
		height: 24px;
		border: 1px solid orangered;
		border-radius: @borderradius;
		overflow: hidden;
		color:orangered;
		.flex-sex-item{
			flex: 1;
			height: 100%;
			line-height: 24px;
		}
		.flex-sex-item-act{
			background-color: orangered;
			color:#fff;
		}
	}

</style>

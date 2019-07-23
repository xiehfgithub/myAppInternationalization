<template>
	<div class="page page-index">
		<mt-header fixed title="国际化">
			<router-link to="/" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div>
			<!-- <mt-button type="default" @click="fnChangeLanguage">切换语言</mt-button>
			<h2>当前语言：{{$i18n.locale}}</h2> -->
			
			
			
			
			<mt-tab-container v-model="activeTab" value="tab-container2">
			  <mt-tab-container-item id="demo1-container">
					<!-- 切换 -->
					<h3>切换内容框</h3>
					<mt-button type="default" @click="fnChangeLanguage">切换语言</mt-button>
					<h2>当前语言：{{$i18n.locale}}</h2>
					<div>
						简单总结：所有展示的数据和文案部分都需要通过变量形式去展示不能写死在页面上，切换语言时候会启用该语言对应的数据
					</div>
					<table>
						<thead>
							<tr>
								<th>公共参数</th>
								<th>业务参数</th>
								<th>拓展1</th>
								<th>拓展2</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{{$t("common.home")}}</td>
								<td>{{$t("message.hint1")}}</td>
								<td>我就</td>
								<td>{{msg}}</td>
							</tr>
							<tr>
								<td>{{$t("common.login")}}</td>
								<td>{{$t("message.hint2")}}</td>
								<td>想试</td>
								<td></td>
							</tr>
							<tr>
								<td>{{$t("common.register")}}</td>
								<td>{{$t("message.hint3")}}</td>
								<td>试国</td>
								<td></td>
							</tr>
							<tr>
								<td>{{$t("common.appDownload")}}</td>
								<td>{{$t("message.hint4")}}</td>
								<td>际化</td>
								<td></td>
							</tr>
							<tr>
								<td>{{$t("common.aboutUs")}}</td>
								<td>{{$t("message.hint5")}}</td>
								<td>自动</td>
								<td></td>
							</tr>
							<tr>
								<td>{{$t("common.faq")}}</td>
								<td>{{$t("message.hint6")}}</td>
								<td>切换</td>
								<td></td>
							</tr>
							<tr>
								<td>{{$t("common.contact")}}</td>
								<td>{{$t("message.hint7")}}</td>
								<td>是否</td>
								<td></td>
							</tr>
							<tr>
								<td>{{$t("common.join")}}</td>
								<td>{{$t("message.hint8")}}</td>
								<td>会非</td>
								<td></td>
							</tr>
							<tr>
								<td>{{$t("common.copyright")}}</td>
								<td>{{$t("message.placeHolder1")}}</td>
								<td>数据</td>
								<td></td>
							</tr>
							<tr>
								<td>{{$t("common.news")}}</td>
								<td>{{$t("message.placeHolder2")}}</td>
								<td>部分</td>
								<td></td>
							</tr>
							<tr>
								<td>{{$t("common.toggle")}}</td>
								<td>{{$t("message.placeHolder3")}}</td>
								<td>自动</td>
								<td></td>
							</tr>
							<tr>
								<td>{{$t("common.welcome")}}</td>
								<td></td>
								<td>翻译</td>
								<td></td>
							</tr>
							<tr>
								<td>{{$t("common.userinfo")}}</td>
								<td></td>
								<td>对应</td>
								<td></td>
							</tr>
							<tr>
								<td>{{$t("common.firstPage")}}</td>
								<td></td>
								<td>语言</td>
								<td></td>
							</tr>
							<tr>
								<td>{{$t("common.setting")}}</td>
								<td></td>
								<td>版本</td>
								<td></td>
							</tr>
							<tr>
								<td>{{$t("common.exit")}}</td>
								<td></td>
								<td>展示</td>
								<td></td>
							</tr>

						</tbody>
					</table>
					
			  </mt-tab-container-item>
			  <mt-tab-container-item id="demo2-container">
					<div>
						简单总结：
						<br />
						所有展示的数据和文案部分都需要通过变量形式去展示不能写死在页面上，切换语言时候会启用该语言对应的数据
					</div>
				
			  </mt-tab-container-item>
			  <mt-tab-container-item id="demo3-container">				
					<div class="loading-box">
						<mt-spinner :size="60" color="#ff0000" :type="3" class="loading"></mt-spinner>
					</div>
					
			  </mt-tab-container-item>
			  <mt-tab-container-item id="demo4-container">
				<div v-for="n in 10">tab-container 4-{{n}}</div>
				
			  </mt-tab-container-item>
			</mt-tab-container>
			<mt-tabbar fixed v-model="activeTabSelected">
			  <mt-tab-item id="demo1">
				<img slot="icon" src="@/assets/x.png">
				国际化
			  </mt-tab-item>
			  <mt-tab-item id="demo2">
				<img slot="icon" src="@/assets/h.png">
				结论
			  </mt-tab-item>
			  <mt-tab-item id="demo3">
				<img slot="icon" src="@/assets/f.png">
				菊花图
			  </mt-tab-item>
			  <mt-tab-item id="demo4">
				<img slot="icon" src="@/assets/logo.png">
				我的
			  </mt-tab-item>
			</mt-tabbar>
			
			
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Index',
		data: function() {
			return {
				pageData: 12345,
				axiosData: "default",
				switchValue: true,
				popupVisible: {},
				msg: '默认的一个待转换语言数据',
				activeTab: "demo1-container",
				activeTabSelected: "demo1"
			}
		},
		components: {

		},
		created: function() {
			console.log(this.pageData);
		},
		methods: {
			fnRightToolCallBack() {
				alert(123);
			},
			fnChangeLanguage() {
				var lang = this.$i18n.locale === "zh" ? "en" : "zh";
				console.log("新的语言：%s", lang);
				this.$i18n.locale = lang;
				//修改数据中的语言数据
				this.msg = this.$t('message.hint8')
			},

		},
		computed: {

		},
		filters: {

		},
		watch: {
			switchValue: function() {
				console.log(`switch按钮值为${this.switchValue}`);
			},
			activeTabSelected: function  () {
				console.log(`底部栏按钮值为${this.activeTabSelected}`);
				this.activeTab = `${this.activeTabSelected+"-container"}`
			}
		}
	}
</script>

<style scoped lang="less">
	@import '../../../assets/common.less';
	.page-index{
		padding-top: 40px;
	}
	.loading-box{
		display: inline-block;
		overflow: hidden;
		margin: 0 auto;
	}
	h2 {
		line-height: 40px;
	}

	table {
		width: 90%;
		box-sizing: border-box;
		table-layout: fixed;
		border-collapse: separate;
		border: 1px solid #e7e7e7;
		border-width: 1px 0 0 1px;
		border-radius: 4px;
		font-size: 13px;
		margin: 10px auto;
	}

	thead,
	tbody,
	tr {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font-weight: 400;
		vertical-align: baseline;
	}

	th {
		padding: 6px 13px;
		border: 1px solid #e7e7e7;
		border-width: 0 1px 1px 0;
		vertical-align: middle;
		text-align: left;
		word-wrap: break-word;
		word-break: break-word;
		font-weight: 600;
		background-color: #f9f8f8;
	}

	td {
		padding: 6px 13px;
		border: 1px solid #e7e7e7;
		border-width: 0 1px 1px 0;
		vertical-align: middle;
		text-align: left;
		word-wrap: break-word;
		word-break: break-word;
	}
	.page-index /deep/ .mint-tab-container-wrap{
		// background: red;
		min-height: calc(100vh - 55px);
		padding-bottom: 55px;
		box-sizing: border-box;
		overflow: auto;
	}
	.page-index /deep/ .mint-tabbar{
		background-image: none;
	}
</style>

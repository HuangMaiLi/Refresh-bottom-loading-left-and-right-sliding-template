<template>
	<view class='purchase-list'>
		<my-tabs @change="tapChange" :modelData="modelData" :initIndex="initIndex"></my-tabs>
		<scroll-view class="purchase-body" scroll-y="true" @scrolltolower="scrolltolower" @scrolltoupper="scrolltoupper" @scroll="scroll" @touchstart="touchstart" @touchend="touchend">
			<my-unit v-for="(item,index) in 10" :key="index" :info="item"></my-unit>
		</scroll-view>
		<my-loading></my-loading>
	</view>
</template>
<script>
	import myTabs from '@/components/myTabs/myTabs.vue'
	import myUnit from '@/components/myUnits/purchaseUnit/unit.vue'
	import myPull from '@/static/js/myPull.js'
	import myLoading from '@/components/myLoading/myLoading.vue'
	export default {
		components:{myTabs,myUnit,myLoading},
		data() {
			return {
				
			}
		},
		onLoad(){
			this.refresh();
		},
		methods: {
			/**
			 * @name 获取列表
			 */
			getList(page,done){
				 console.log(`获取第${page}页数据`);
				 done([1])
			},
			
			/**
			 * @name 触底加载
			 */
			scrolltolower(event){
				this.getList(this.page,this.__pulldone)
			},
			
			scroll(e){
				// 重新设置pulldown
				this.setPullDown(e.detail.scrollTop<10)
			},
			
			scrolltoupper(){
				
			},
			
			
			/**
			 * @name 改变tab
			 * @param val 索引
			 */
			tapChange(val){
				this.initIndex=val
			}
		},
		mixins:[myPull({})],
		
	}
</script>
<style lang='scss'>
	.purchase-list {
		background-color: #f5f5f5;
		height: 100%;
		overflow: hidden;
		
		.purchase-body{
			height: calc(100% - 88upx);
			overflow: auto
		}
	}
</style>

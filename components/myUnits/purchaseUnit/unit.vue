<template>
    <view class='my-unit'>
		<view class="unit-head">
			<text>求购编号：12346579812</text><text class="fr color-999">正在报价</text>
		</view>
		<view class="unit-body">
			<text v-for="(item,index) in unitModel1" :key="index" >{{item.label}}：<text v-if="item.isMoney" :class="item.class">￥ </text><text :class="item.class">暂无</text><text v-if="item.isMoney" :class="item.class"> 元</text></text>
		</view>
		<view class="unit-foot">
			<text class="color-999">20190212</text>
			<button class="fr btn" type="warn" @click="doDel">删除求购</button>
		</view>
    </view>
</template>
	
<script>
    export default{
        data() {
            return {
				unitModel1:[
					{prop:"",label:"匹配商铺数"},
					{prop:"",label:"已报价商铺数"},
					{prop:"",label:"最新报价",class:"color-red",isMoney:true},
					{prop:"",label:"商品报价",class:"color-999",isMoney:true},
					{prop:"",label:"税点",class:"color-999"},
					{prop:"",label:"税费",class:"color-999",isMoney:true},
					{prop:"",label:"运费",class:"color-999",isMoney:true},
				]
            }
        },
        methods:{
			doDel(){
				this.$store.commit("switch_loading")
			}
        },
		computed:{
			
		},
		created() {
			
		},
    }
</script>
<style lang='scss'>
    .my-unit{
		margin: 20upx 0;
		background-color: #ffffff;
		font-size: 28upx;
		transform: all 1s;
		
		.unit-head{
			padding: 20upx;
			height: 80upx;
			box-sizing: border-box;
			border-bottom: 2upx solid #f5f5f5;
		}
		.unit-body{
			padding: 20upx;
			display: flex;
			flex-wrap: wrap;
			
			text{
				width: 50%;
				font-size: 28upx;
				line-height: 55upx;
			}
		}
		.unit-foot{
			height: 88upx;
			padding: 0 20upx;
			border-top: 2upx solid #f5f5f5;
			border-bottom: none;
			line-height: 88upx;
			
			.btn{
				height: 60upx;
				font-size: 28upx;
				line-height: 60upx;
				margin: 14upx 0;
			}
		}
	}
</style>
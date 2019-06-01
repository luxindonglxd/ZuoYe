<template>
	<div v-if="arrText.length">
		<ul class="clearfix">
			<li v-for="(item,index) in arrText" @click="del(index)">{{item}}</li>
		</ul>
	</div>
</template>

<script>
	export default{
		props:["arrText"],
		methods:{
			del:function(index){
//				this.arrText.splice(index,1)
				this.$emit("data",index);
			}
		}
	}
</script>

<style scoped="scoped">
	li{border: 1px solid #ccc;font-family:"楷体";border-radius:5px ;padding: 15px 10px;float: left;margin: 5px 20px;}
	li:hover{background: pink;}
</style>
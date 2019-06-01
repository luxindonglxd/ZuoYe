<template>
	<div class="new-quote">
		<h5>Quote</h5>
		<textarea v-model="text"></textarea>
		<button @click="Add">Add Quote</button>
	</div>
</template>

<script>
	export default{
		data:function(){
			return{
				text:""
			}
		},
		methods:{
			Add:function(){
				this.$emit("text",this.text);
				this.text="";
			}
		}
	}
</script>

<style scoped="scoped">
	.new-quote{width: 600px;margin: auto;}
	.new-quote h5{font-weight: bold;padding: 10px 0;color: aquamarine;font-size: 20px;}
	.new-quote textarea{width: 100%;height: 100px;border: 1px solid #ccc;border-radius:5px ;}
	.new-quote button{border-radius:5px ;border: none;outline: none;width: 100px;height: 30px;line-height: 30px;margin: 10px 0;}
</style>
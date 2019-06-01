<template>
  <div id="app">
   		<Header :maxLength="maxLength" :arrText="arrText"></Header>
   		<NewQuote @text="gettext"></NewQuote>
   		<Card :arrText="arrText" @data="getindex"></Card>
   		<Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import NewQuote from './components/NewQuote'
import Card from './components/Card'
import Footer from './components/Footer'
export default {
  name: 'app',
  data () {
    return {
      maxLength:10,
      arrText:["wdsfsdgdg2","dyer3"]
    }
  },
  components:{
  	Header,
  	NewQuote,
  	Card,
  	Footer
  },
  methods:{
  	gettext:function(data){
  		if(this.arrText.length>=this.maxLength){
  			return alert("请先删除再添加")
  		}
  		this.arrText.push(data);
  	},
  	getindex:function(index){
  		this.arrText.splice(index,1)
  	}
  }
}
</script>

<style scoped="scoped">
#app{width: 1000px;margin: auto;}

</style>
 
const urlLib=require('url');
var obj=urlLib.parse("http://www.dfsdfsdsgsdgsddsdf.com/index?a=15&b=5",true); 
console.log(obj.pathname,obj.query);
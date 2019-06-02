const jade=require('jade');

var str=jade.renderFile('./views/14.jade',{pretty:true,
	content:"<h2>dsaaaaaaaaaaaaaa</h2>"
	
});

console.log(str);
 
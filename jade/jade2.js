const jade=require('jade');
const fs=require('fs');

var str=jade.renderFile('./view/2.jade',{pretty:true});

fs.write("./build/2.html",str,function(err){
	if(err)
		console.log("失败");
	else{
		console.log("成功")；
	}
});

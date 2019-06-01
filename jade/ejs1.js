const ejs=require('ejs');

var str=ejs.renderFile('./view/1.ejs',{},function(err,data){
	if(err)
		console.log(err);
	else
		console.log(data);
});

console.log(str);
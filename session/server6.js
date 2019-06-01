const express=require('express');
const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');

var server=express();

//cookie
server.use(cookieParser());
server.use(cookieSession({
	name:'sess',
	keys:['ds','dsf'],
	maxAge:24*3600*1000
}));
server.use('/',function(req,res){
	if(req.session['count']==null){
		req.session['count']=1;
	}else{
		req.session['count']++;
	}
	console.log(req.session['count']);
	res.end('ok');
})



server.listen(8080);

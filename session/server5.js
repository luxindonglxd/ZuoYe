const express=require('express');
const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');

var server=express();

//cookie
server.use(cookieParser());
server.use(cookieSession({
	keys:['ds','dsf']
}));
server.use('/',function(req,res){
	console.log(req.session);
//	res.clearCookie('user')
	res.end('ok');
})



server.listen(8080);

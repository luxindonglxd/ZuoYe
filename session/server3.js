const express=require('express');
const cookieParser=require('cookie-parser');
var server=express();

//cookie
server.use(cookieParser('sggreg'));

server.use('/',function(req,res){
	req.secret='sggreg';
	res.cookie('user','nlue',{signed:true})
	console.log("签名cookies",req.signedCookies);
	console.log("无签名cookies",req.cookies);
	res.end('ok');
})



server.listen(8080);

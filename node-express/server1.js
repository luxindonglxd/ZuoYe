const express=require('express');

var server=express();

server.get('/',function(req,res){
	console.log("有GET");
});
server.post('/',function(req,res){
	console.log("有POST");
});

server.listen(8081);

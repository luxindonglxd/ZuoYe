const express=require('express');

var server=express();

//目录1：/user/
var routerUser=express.Router();


routerUser.get('/1.html',function(req,res){
	res.send('user1');
});

routerUser.get('/2.html',function(req,res){
	res.send('user22222');
});

server.use('/user',routerUser);
//目录2：/article/
var articleRouter=express.Router();
server.use('/article',articleRouter);

articleRouter.get('/10.html',function(req,res){
	res.end('user10101010');
})



server.listen(8080);

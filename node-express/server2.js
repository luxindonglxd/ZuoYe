const express=require('express');
const expressStatic=require('express-Static');


var server=express();

server.listen(8080); 


var users={
	'blue':'123456',
	'list':'789789'
};

//接口：
server.get('/login', function (req, res){
  var user=req.query['user'];
  var pass=req.query['pass'];

  if(users[user]==null){
    res.send({ok: false, msg: '此用户不存在'});
  }else{
    if(users[user]!=pass){
      res.send({ok: false, msg: '密码错了'});
    }else{
      res.send({ok: true, msg: '成功'});
    }
  }
});



server.use(expressStatic('./www'));

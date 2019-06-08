const express=require('express');
const bodyParser=require('body-parser');
const multer=require('multer');
const fa=require('fs');
const pathLib=require('path');

var objMulter=multer({dest:'./www/upload/'});

var server=express();
//错误
//server.use(bodyParser.urlencoded({extended:false}));
server.use(objMulter.any());



server.post('/',function(req,res){
//	console.log(req.files[0].originalname});
	
	
	//新文件名
	var newName=req.files[0].path+pathLib.parse(req.files[0].originalname).ext;
	
	fa.rename(req.files[0].path,newName,function(err){
		if(err)
			res.end('失败');
		else{
			res.end('成功');
		}
	})
	//1获取原始名
	//2.重命名
})

server.listen(8080);

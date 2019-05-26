var http=require('http');
const querystring=require('querystring');
http.createServer(function(req,res){
	
	var str='';//接收数据
	
//	data 有一段数据到达(很多次)
	var i=0;
	req.on('data',function(data){
		console.log('第${i++}次收到数据');
		str+=data;
	});
//	end 数据全部到达
	req.on('end',function(){
//		console.log(str);
		var post=querystring.parse(str);
		console.log(post);
	});
	
	console.log('sdggggggggg');
	
	
}).listen(8082);

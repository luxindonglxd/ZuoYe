const http=require('http');

http.createServer(function(req,res){
	console.log(req.url,'\n\n');
    var get={};
   if(req.url.indexOf('?')!=-1){
   		var arr=req.url.split('?');
		 var url=arr[0];
		//arr[0]=>地址  '/aaa'
		//arr[1]=>数据 'user=name&pass=123'
		
		var arr2=arr[1].split('&');
	//	arr2=>['user=name','pass=123']
		
		for(var i=0;i<arr2.length;i++){
			var arr3=arr2[i].split('=');
	//		arr3[0]=>名字 'user'
	//		arr3[1]=>数据 'name'
			get[arr3[0]]=arr3[1];
		}
   }else{
   		var url=req.url;
   }
	
	console.log(url,get);
	res.write('dsfsdf');
	res.end();
}).listen(8080);

const http=require('http'); 
var server=http.createServer(function(require,reponse){
//	console.log("有人访问我了");
//	reponse.write("sdssdfd");
	console.log(require.url);
	reponse.write("abc")
	reponse.end(); 
});

//监听
server.listen(8080);

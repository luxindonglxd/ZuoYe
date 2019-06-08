const path=require('path');


var str='c\\wamp\\www\\a.html ';

var obj=path.parse(str);

//basenaem  文件名
//extname 	扩展名
//path	dir	路径
//pathname	

console.log(obj);
const jade=require('jade');

var str=jade.renderFile('./views/9.jade',{pretty:true});

console.log(str);
 
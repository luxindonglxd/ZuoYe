const jade=require('jade');

var str=jade.renderFile('./view/8.jade',{pretty:true});

console.log(str);
 
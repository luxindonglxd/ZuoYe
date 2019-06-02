const jade=require('jade');

var str=jade.renderFile('./views/10.jade',{pretty:true,arr:['sfff','dff']});

console.log(str);
 
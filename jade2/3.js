const jade=require('jade');

var str=jade.renderFile('./views/7.jade',{pretty:true,
	json:{width:'52px',height:'85px'},
	arr:['dsd','dsdf']
});

console.log(str);
 
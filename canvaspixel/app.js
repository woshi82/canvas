var express = require('express'),
	path = require('path'),
	app = express();
//根目录
var basePath = process.cwd();
app.use(express.static(basePath));

//首页pixelImage.html
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname,'./pixelImageD.html'));
})


var PORT = process.env.port || 2000;
app.listen(PORT, function(){
	console.log('pixelImage listerning on port' +　PORT);
})
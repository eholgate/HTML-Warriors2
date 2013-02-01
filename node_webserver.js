var http = require('http');
http.createServer(function (req, res) {
  //console.log('===========new request============');
  //console.log(req.method);
  //console.log(req.url);
  var p = require('url').parse(req.url,true);
  var qs = require('querystring');
  //console.log(p);
  //console.log(req.body);
  
     if (req.method == 'POST') {
        var body = '';
        req.on('data', function (data) {
            body += data;
        });
        req.on('end', function () {

            var POST = qs.parse(body);
            // use POST
			//console.log('POST request');
			//console.log(POST);
			console.log('BODY:Received msg "' + POST.msg + '" from user "' + POST.from + '"');
			var obj = JSON.parse(POST.json);
			//console.log(obj);
			console.log('JSON:Received msg "' + obj.msg + '" from user "' + obj.from + '"');

        });
    }
	
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '192.168.2.69');
console.log('Server running at http://192.168.2.69:1337/');
//console.log('Server running at http://127.0.0.1:1337/');
const http = require('http');
const fs = require ('fs');
const PORT = 8080;
const URL = require('url');

const htmlFormat = {'Content-Type':'text/html'};
const jsFormat = {'Content-Type':'text/javascript'};
const cssFormat = {'Content-Type':'text/css'};
function handleRequest(req,res){
  if(req.method === 'GET'){
    const path = './public' + req.url;
    const format = getFormt(path);
    console.log('GET ' + format["Content-Type"] + ' ' + path);
    if(path == './public/'){
      fs.readFile('./public/index.html',function(err,data){
	res.end(data,htmlFormat,()=>{console.log('SENT ./public/index.html')});
      });
    } 
    else{
    fs.readFile(path,
	    function(err,data){
		    if(err){
			    res.statusCode = 404;
			    fs.readFile('./public/404.html', (er,d404)=>{res.end(d404,htmlFormat,()=>{console.log('SENT ./public/404.html')});});
                    }
		    else{
                      res.end(data,format,()=>{console.log('SENT ' + path)});
		    }
	    });
    }
  }
}

function getFormt(path){
  if(path.search('.js') != -1) return jsFormat;
  else if(path.search('.html') != -1) return htmlFormat;
  else if(path.search('.css') != -1) return cssFormat;
  else {console.log("ERROR Unknown type requested"); return htmlFormat;}
}

const server = http.createServer(handleRequest);
server.listen(PORT,()=>{console.log('Server is now running')});












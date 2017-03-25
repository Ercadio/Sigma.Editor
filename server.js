const http = require('http');
const fs = require ('fs');
const PORT = 8080;
const URL = require('url');

const htmlFormat = {'Content-Type':'text/html'};
function handleRequest(req,res){
  const path = './public' + req.url;
  console.log('Request at ' + path);
  if(path == './public/'){
    fs.readFile('./public/index.html',      function(err,data){
	res.end(data,htmlFormat,()=>{console.log('Sent public index.html')});
      });
  }
  else{
    fs.readFile(path,
	    function(err,data){
		    if(err){
			    fs.readFile('./public/404.html', (er,d404)=>{res.end(d404,htmlFormat,()=>{console.log('Sent public 404.html')});});
                    }
		    else{
                      res.end(data,htmlFormat,()=>{console.log('Sent public ' + path)});
		    }
	    });
  }
}


const server = http.createServer(handleRequest);
server.listen(PORT,()=>{console.log('Server is now running')});












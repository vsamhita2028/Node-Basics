
const http =require("http");
const fs= require("fs");
const path = require('path');


const host="localhost"
const port=3000

const server = http.createServer((req,res)=>{
  
  console.log("Requesrion for url "+req.url +" using the method "+ req.method);
  
  if(req.method=="GET"){
    var myurl;
    if(req.url=="/") myurl="/index.html";
    else myurl=req.url;

    var filepath =path.resolve("./public"+myurl);
    var fileExt = path.extname(filepath)
    if(fileExt == ".html"){
      fs.exists(filepath,(exists)=>{
        if(!exists){
          res.statusCode = 400;
          res.setHeader("Content-Type","text/html");
          res.end("<html><body><h1>Error 404 : "+myurl+" is not found :( </h1></body></html>");
          return;
        }
        res.statusCode = 200;
        res.setHeader("Content-Type","text/html");
        fs.createReadStream(filepath).pipe(res);
      })
    }else{
      res.statusCode = 400;
      res.setHeader("Content-Type","text/html");
      res.end("<html><body><h1>Error 404 : "+myurl+" is not html file :( </h1></body></html>");
    }
  }else{
    res.statusCode = 400;
    res.setHeader("Content-Type","text/html");
    res.end("<html><body><h1>Error 404 : "+req.method+" is not supported :( </h1></body></html>");
  }
});

server.listen(port,host,()=>{
    console.log(`server is running on http://${host}:${port}/`);
})
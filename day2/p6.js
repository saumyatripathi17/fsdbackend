const http=require('http');

const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":'application/json'});
    let data={
        "name":"john doe",
        "age":30
    }
    if(res.url==="/getdata" && req.method==="GET"){
        res.end(JSON.stringify(data));
    }
    else if(res.url==="/setdata" && req.method==="POST"){
        res.end({message:"data recieved"});
    }
});
server.listen(9000, () => {
    console.log('Server is running on port 9000');
});
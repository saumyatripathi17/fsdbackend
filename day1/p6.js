const fs=require('fs');
const append=()=>{
    fs.appendFile("data.txt","\nhello world!",(err)=>{
        if(err) console.log(err);
    });
}
append();
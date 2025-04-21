const fs=require('fs')
const data="I am the newest data"
const write=()=>{
    fs.writeFile('./data.txt',data,(err)=>{
        if(err)
            console.error(err);
        else
        console.log("File updated successfully");
        })
}
write();
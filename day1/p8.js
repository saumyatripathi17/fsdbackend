const fs=require('fs');
fs.mkdir("mkdir",(err)=>{
    if(err){
        console.log('error creating directory:',err);
        return;
    }
    console.log("directory created successfully");
});
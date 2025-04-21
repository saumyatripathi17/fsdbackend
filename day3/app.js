const express=require('express');
const app=express();
app.use(express.json())
const users=[
    {id:1,name:'john',age:25},
    {id:2,name:'saumya',age:30},
    {id:3,name:'tanya',age:28}
];

app.get('/api',(req,res)=>{
    res.json(users);
})

app.post('/users',(req,res)=>{
    const data=req.body;
    const newid=users.length>0?users[users.length-1].id+1:1;
    data.id=newid;
    users.push(data)
    res.json({message:'data receievd',data:data});
});

 app.get('/users',(req,res)=>{
    res.send('welcome to backend server')
 });

 app.listen(9000,()=>{
    console.log('server running on port 9000')
 })
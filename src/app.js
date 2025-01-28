const express= require('express');

const app =express();

app.get("/user/:userId",(req,res)=>{
    console.log(req.params);
    res.send({fname:"shiva",lname:"verma"})
})

app.get("/user/:userId/:name/:password",(req,res)=>{
    console.log(req.params);
    res.send({fname:"shiva",lname:"verma"})
})

app.post("/user",(req,res)=>{
    
   
    res.send("Data Saved Successfully")
})


// // work for // /ac, /abc
// app.get("/ab*cd",(req,res)=>
// {
//     res.send({fname:"shiva",lname:"verma" ,value:"trial h ye"})
// })

app.delete("/user",(req,result)=>{
    result.send("deleted suceessfully")
})

app.listen(3000,()=>{
    console.log("My server is successfully running on port 3000");
});
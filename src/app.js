const express= require('express');

const app =express();

app.use("/test",(req,res)=>{
    res.send("Hello From server")
})
app.use("/hello",(req,res)=>{
    res.send("hey hero hello hello")
})
app.use("/Dashboard",(req,res)=>{
    res.send("Dashboard yha h")
})
app.listen(3000,()=>{
    console.log("My server is successfully running on port 3000");
});
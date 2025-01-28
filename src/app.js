const express= require('express');

const app =express();

// app.use("/",(req,res)=>{
//     res.send("Shiva")
// })

// app.use("/test",(req,res)=>{
//     res.send("Hello From server")
// })

app.get("/user",(req,res)=>{
    res.send({fname:"shiva",lname:"verma"})
})

app.post("/user",(req,res)=>{
    
    res.send("Data Saved Successfully")
})

app.delete("/user",(req,result)=>{
    result.send("deleted suceessfully")
})

app.listen(3000,()=>{
    console.log("My server is successfully running on port 3000");
});
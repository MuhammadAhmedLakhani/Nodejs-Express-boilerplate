
import express from "express";

const app = express()

app.get("/",(req,res)=>{
    res.send("Hello Node")
})
app.get("/users",(req,res)=>{
    res.send({
        name:"Ahmed",
        email:"ahmed@gmail.com"
    })
})


app.listen(3000,()=>{
    console.log("your server is running on 3000")
})
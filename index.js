
import express from "express";

const app = express()

app.get("/",(req,res)=>{
    res.send("Hello Node")
})


app.listen(3000,()=>{
    console.log("your server is running on 3000")
})
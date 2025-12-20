
import express, { json } from "express";

const app = express()


//adding middleware which is express itself

app.use(express.json())



console.log("running app")


app.get("/",(req,res)=>{
    res.send("Hello Node")
})
app.get("/users",(req,res)=>{
    res.send(
      {...users , id : users.length + 1}
    )
})


let users = []; 


app.post("/user",(req,res )=>{

    console.log("res",req.body)
    users.push(req.body)
    res.send({user: req.body , message:"User Added uscessfully"})
})




app.listen(3000,()=>{
    console.log("your server is running on 3000")
})

























































    // --post request 


// fetch("http://localhost:3000/posts", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json" // Crucial for servers to read the body
//     },
//     body: JSON.stringify({ name: "Ahmed" }) // Ahmed must be in quotes
// })
// .then((res) => res.json()) // json() must have parentheses ()
// .then((res1) => {
//     console.log(res1); // Success handler
// })
// .catch((error) => {
//     console.log("Error detected:", error); // Error handler
// });
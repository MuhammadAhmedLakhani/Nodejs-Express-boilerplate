
import express, { json } from "express";

const app = express()


//adding middleware which is express itself

app.use(express.json())


//setting up server on port

app.listen(3000,()=>{
    console.log("your server is running on 3000")
})



///get request


app.get("/",(req,res)=>{
    res.send("Hello Node")
})    
app.get("/users",(req,res)=>{
    res.send(
        users
    )    
})    


//initializing empty array

let users = []; 

//post request

app.post("/user",(req,res )=>{

    let id = new Date().getTime(36) 


    users.push( {...req.body , id : id})
   
    res.send({user: req.body , message:"User Added uscessfully"})
})    



//delete request




app.delete("/user/:id",(req,res)=>{
    
    const {id} =  req.params

    



  users = users.filter((obj)=>{
        return obj.id !==  Number(id)
    })

    console.log("users",users)


    res.send("deleted user sucessfully")
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
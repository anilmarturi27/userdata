const express=require("express")
const mongoose=require("mongoose")
const Registeruser=require("./model")
const usertext=require('./model1')
const bodyparser=require('body-parser')
const cors = require('cors')

const app=express()
// to connect mongoose we use
mongoose.connect("mongodb+srv://aniani:aniani@cluster0.5tjhork.mongodb.net/?retryWrites=true&w=majority").then(
    ()=>{
        console.log("db connected...")
    }
)

// for body parser
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())


// user to connect front end and backend
app.use(cors({origin :"*"}))


// making http post request
app.post('/login',async(req,res)=>{
    
    try{
        const{username,email,phno}=req.body

        let emai=await Registeruser.findOne({email})
        let phn=await Registeruser.findOne({phno})
        let usernam=await Registeruser.findOne({username})
        let date=new Date()
        if(emai || phn || usernam){
            return res.send("session expired")
        }
        else{
            let newuser= new Registeruser({
                username,email,phno,date
            })
            await newuser.save()
            return res.send("login succesful")

        }
    

    }
    catch(err){
        console.log(err)
    }
})

// making http post request

app.post('/home',async(req,res)=>{
  try{
     const{text}=req.body
     const date=new Date()
     let data=new usertext({
        text,date
     })
     await data.save()
     return res.send("data saved ")
  }
  catch(err){
    console.log(err)
  }

})

// running port 
app.listen(5000,()=>{
    console.log("server running...")
})
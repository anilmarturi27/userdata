const mongoose=require('mongoose')

let usertext= new mongoose.Schema({
   
    text:{
        type:String,
        
    },
    date :{
        type : Date,
        default : Date.now
    }
  

    
})

module.exports = mongoose.model("usertext",usertext)
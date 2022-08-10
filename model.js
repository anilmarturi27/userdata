const mongoose=require('mongoose')

let Registeruser= new mongoose.Schema({
    username:{
        type: String,
        required :true
    },
    email:{
        type: String,
        required :true,
        unique : true

    },
    phno:{
        type: Number,
        required : true
    },
    date :{
        type : Date,
        default : Date.now
    }
    
    
})

module.exports = mongoose.model("Registeruser",Registeruser)
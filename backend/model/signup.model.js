const mongoose=require("mongoose")

const SignupSchema=mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    repass:{
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    otp: {
        type: Number
    },
    otpExpire: {
        type: Date
    }
})

const SignupModel=mongoose.model(SignupSchema)

module.exports=SignupModel
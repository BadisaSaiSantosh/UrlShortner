const mongoose=require("mongoose")

const LoginSchema=mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
},{
    timestamps:true
})

const LoginModel=mongoose.model("user",LoginSchema)

model.export=LoginModel




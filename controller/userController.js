const User=require("../model/userModel");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const login=async(req,res)=>{
    const {email,password}=req.body;
    
    try{
        const user =await User.findOne({email}).select("+password");
        if(!user){
            return res.status(404).send({message:"User not found"});
        }
        const isValidPassword=await bcrypt.compare(password,user.password);
        if(!isValidPassword){
            return res.status(400).send({message:"Invalid password"});
        }
        const token =jwt.sign({userId:user._id},"secret_key",{
            expiresIn:"1h",
        });
        res.json({ token })

    }
    catch(err){
        console.log(err);
    }
}
const signup=async(req,res)=>{
    const {name,email,password}=req.body;
    try{
        const user=await User.create({
            name,
            email,
            password
        });
        const token =jwt.sign({userId:user._id},"secret_key",{
            expiresIn:"1h",
        });
        res.json({ token });
    }
    catch(err){
        console.log(err);
    }
}

module.exports={login,signup};
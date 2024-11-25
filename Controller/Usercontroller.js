const mongoose = require('mongoose')
const usermodel = require('../Model/Usermodel')

const Usercreate = async (req,res)=>{
    try {
        const user =new usermodel(req.body)
        await user.save()
        res.status(200).send("User Registration succefuuly")
    } catch (error) {
        res.status(500).send("User Failed Registration")
    }
}

const Userget = async (req,res)=>{
    try {
        const getalluser = await usermodel.find()
        res.status(200).json(getalluser)

    } catch (error) {
        res.status(500).send({error:error.message})

    }
}

const getuserbyid = async (req,res)=>{
    try {
        const user = await usermodel.findById(req.params._id)
        if(!user){
            res.status(400).json("User Not Found")
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}
const deleteuserbyid = async (req,res)=>{
    try {
        const user = await usermodel.findByIdAndDelete(req.params._id)
        if(!user){
            res.status(400).json("User Not Found")        }
            res.status(200).json("Deleted Successfully")
    } catch (error) {
       res.status(500).send({error:error.message}) 
    }
}

const updateuserbyid = async (req,res)=>{
    try {
        const {_id} = req.params
        const {name,email,mobile} = req.body
        const user = await usermodel.findByIdAndUpdate(_id,{name,email,mobile},{new : true})
        if(!user){
            res.status(400).json("User Not Found")
        }
        res.status(200).json("User Update Successfully")
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}
module.exports = {Usercreate,Userget,getuserbyid,deleteuserbyid,updateuserbyid}
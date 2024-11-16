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

module.exports = {Usercreate,Userget}
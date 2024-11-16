const express = require('express')
const mongoose = require('mongoose')
const Mongo_url =  "mongodb://127.0.0.1:27017/HarshNodejs"

const dbconnect = async(req,res)=>{
    try {
        await mongoose.connect(Mongo_url)
        console.log("Successfully Connect with Mongo Db")
    } catch (error) {
        console.log("Failed Connection",error)
    }
}

module.exports = dbconnect
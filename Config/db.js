const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const dbconnect = async(req,res)=>{
    try {
        await mongoose.connect(process.env.Mongo_url)
        console.log("Successfully Connect with Mongo Db")
    } catch (error) {
        console.log("Failed Connection",error)
    }
}

module.exports = dbconnect
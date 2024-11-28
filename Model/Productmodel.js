const mongoose = require('mongoose')
const ProductSchema =  new mongoose.Schema({
    p_id:{
        type:String,
        required:true,
        unqiue:true
    },
    p_name:{
        type:String,
        required:true
    },
    p_price:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Product",ProductSchema)
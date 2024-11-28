const Productmodel = require('../Model/Productmodel')


const Productcreate = async (req,res)=>{
    try {
     const product = new Productmodel(req.body) 
     await product.save()
     res.status(201).json("Product Successfully Created")  
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const Productget = async (req,res)=>{
    try {
       const getproduct = await Productmodel.find()
       if(!getproduct){
        res.status(400).json("Product Not Found!")
       } 
       res.status(201).json(getproduct)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
const ProductgetByid = async (req,res)=>{
    try {
       const getproduct = await Productmodel.findById(req.params._id)
       if(!getproduct){
        res.status(400).json("Product not Found")
       } 
       res.status(201).json(getproduct)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const Productupdate = async (req,res)=>{
    try {
        const {_id} = req.params
        const {p_name,p_price} = req.body
        const updateproduct = await Productmodel.findByIdAndUpdate(_id,{p_name,p_price},{new:true})
        if(!updateproduct){
            res.status(400).json("Product Not Found")
        }
        res.status(201).json("Updated Successfully")
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const Productdelete = async (req,res)=>{
    try {
        const deleteproduct = await Productmodel.findByIdAndDelete(req.params._id)
        if(!deleteproduct){
            res.status(400).json("Not Found")
        }
        res.status(201).json("Deleted Successfully")
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
module.exports = {Productcreate,Productget,ProductgetByid,Productupdate,Productdelete}
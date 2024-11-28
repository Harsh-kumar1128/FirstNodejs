const express = require('express')
const router = express.Router()
const Productcontroller = require('../Controller/Productcontroller')

router.post("/createproduct",Productcontroller.Productcreate)
router.get("/getproduct",Productcontroller.Productget)
router.get("/getproduct/:_id",Productcontroller.ProductgetByid)
router.put("/updateproduct/:_id",Productcontroller.Productupdate)
router.delete("/deleteproduct/:_id",Productcontroller.Productdelete)
module.exports= router
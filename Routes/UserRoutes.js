const express = require('express')
const routes = express.Router()
const Usercontroller = require('../Controller/Usercontroller')



routes.post('/post',Usercontroller.Usercreate)
routes.get('/get',Usercontroller.Userget)
routes.get('/get/:_id',Usercontroller.getuserbyid)
routes.delete('/delete/:_id',Usercontroller.deleteuserbyid)
routes.put('/put/:_id',Usercontroller.updateuserbyid)
//  routes.get('/get',(req,res)=>{
//     res.send("This is get Method")
//  })

//  routes.post('/post',(req,res)=>{
//     res.send("This is post method")
//  })
module.exports = routes
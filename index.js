const express = require('express')
const app = express()

const Userroute = require('./Routes/UserRoutes')
const Productroute = require('./Routes/ProductRoutes')
const dbconnection = require('./Config/db')
const bodyparser = require('body-parser')
require('dotenv').config()
const port = process.env.PORT

app.use(bodyparser.json())
dbconnection()
app.use('/api',Userroute)
app.use('/api',Productroute)
app.listen(port,()=>{
  console.log(`server is  running on ${port}`)
})
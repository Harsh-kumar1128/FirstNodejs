const express = require('express')
const app = express()
const PORT = 8000
const Userroute = require('./Routes/UserRoutes')
const dbconnection = require('./Config/db')
const bodyparser = require('body-parser')


app.use(bodyparser.json())
dbconnection()
app.use('/api',Userroute)
app.listen(PORT,()=>{
  console.log(`server is  running on ${PORT}`)
})
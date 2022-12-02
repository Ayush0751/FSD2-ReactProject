require('dotenv').config()
const workoutRoutes = require('./routes/workouts')

const express = require('express')
const mongoose = require('mongoose')
const app = express()

//middle ware so that req have json data
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path , req.method)
    next()
})


app.use('/api/workouts',workoutRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("connect letss gooooooo")
    })
    .catch(()=>{
        console.log("errrrrror")
    })

app.listen(process.env.PORT,()=> {
    console.log("lolol!!")
})
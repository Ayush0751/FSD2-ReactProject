const express = require('express')

const app = express()

app.get('/', (req , res)=>{
    res.json({msg: "hihihi"})
})


app.listen(4000,()=> {
    console.log("lolol!!")
})
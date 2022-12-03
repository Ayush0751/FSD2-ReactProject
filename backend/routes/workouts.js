const express = require('express')

const router = express.Router()

router.get('/',(req,res)=>{
    res.json({msg: 'ajajjasfa'})
})

router.get('/:id',(req,res)=>{
    res.json({msg:'id mdamdma'})
})

router.post('/',(req,res)=> {
    res.json({msg: 'muhaha post'})
})

router.delete('/:id',(req,res)=> {
    res.json({msg: 'muhaha del'})
})

router.patch('/:id',(req,res)=> {
    res.json({msg: 'muhaha patch'})
})
module.exports = router
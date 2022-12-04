const express = require('express')
const {
     createWorkout,
     getWorkout,
     getWorkouts,
     deleteWorkout,
     updateWorkout
     } = require('../controllers/workoutcontroller')
const Workout= require('../models/workoutModel')
const router = express.Router()

router.get('/',getWorkouts)

router.get('/:id',getWorkout)

router.post('/',createWorkout)

router.delete('/:id',deleteWorkout)

router.patch('/:id',updateWorkout)
module.exports = router
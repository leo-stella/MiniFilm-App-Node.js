const express = require('express')
const app = express()

const mongoose = require('mongoose')
const filmsRoute = require('./routes/films')

app.use('/films', filmsRoute)

app.get('/', (req, res)=>{
    res.send('Homepage')
})

const MURL = 'mongodb+srv://leo:1234@cluster0.ly8zj.mongodb.net/MiniFilms?retryWrites=true&w=majority'
mongoose.connect(MURL, ()=>{
    console.log('MongDB is on...')
})
app.listen(3000, ()=>{
    console.log('Server up and running...')
})


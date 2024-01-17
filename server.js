require('dotenv').config()
require('./config/database')
const express = require("express");
const app = express();
const logger = require('morgan')

//setting mongoose
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('connected', ()=>{
    console.log(`connected to ${db.name} at ${db.host}:${db.port}`)
})

//MIDDLEWARE
app.use('/api/users', require('./routes/api/users'));
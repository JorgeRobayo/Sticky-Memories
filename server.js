require('dotenv').config()
require('./config/database')
const logger = require('morgan')

//setting mongoose
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('connected', ()=>{
    console.log(`connected to ${db.name} at ${db.host}:${db.port}`)
})
const express = require("express")
const colors = require('colors')
const { errorHandler } = require("./middleware/errorMiddleware")
const connectDB = require("./config/db")
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const cors=require('cors')

connectDB()
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use('/api/students', require('./routes/studentsRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler)

app.listen(port, () => console.log(`server started on port ${port}`))
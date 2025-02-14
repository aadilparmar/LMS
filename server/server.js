import express from 'express'
import cors from 'cors'
import 'dotenv/config'

//initalize Express
const app =express()

//Middlewares
app.use(cors())

//Routes
app.get('/',(req,res)=>res.send("API Working"))

//Port
const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{console.log(`server is running on PORT ${PORT}`)})

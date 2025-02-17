import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks} from './controllers/webhooks.js'
import educatorRouter from './routes/educatorRoutes.js'
import { clerkMiddleware } from '@clerk/express'
import connectCloudinary from './configs/cloudinary.js'
import courseRouter from './routes/courseRoutes.js'
import userRouter from './routes/userRoutes.js'

//initalize Express
const app =express()

//Middlewares
app.use(cors())
app.use(clerkMiddleware())

//Connect to database
await connectDB()
await connectCloudinary()

//Routes
app.get('/',(req,res)=>res.send("API Working"))
app.post('/clerk',express.json(),clerkWebhooks )
app.use('/api/educator',express.json(),educatorRouter)
app.use('/api/course',express.json(),courseRouter)
app.use('/api/user',express.json(),userRouter)
// app.post('/stripe',express.raw({type:'application/json'}),stripeWebhooks)

//Port
const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{console.log(`server is running on PORT ${PORT}`)})

import express from 'express';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import connectToDB from './db/connectToDB.js';
dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000




app.get('/',(req,res) => {
    res.send("Hello World!!")
})


// Middlewares
app.use(express.json()) // to extract the fields from req.body
app.use(cookieParser()) // to extract the cookie from req.cookies

app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)


app.listen(PORT, () => {
    connectToDB();
    console.log(`server is running on port ${PORT}`)
})
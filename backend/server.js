import express from 'express';
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js';
import connectToDB from './db/connectToDB.js';
dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000




app.get('/',(req,res) => {
    res.send("Hello World!!")
})


// Middlewares
app.use(express.json()) // to extract the fields from req.body
app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    connectToDB();
    console.log(`server is running on port ${PORT}`)
})
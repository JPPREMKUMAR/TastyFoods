import express from "express"
import dotenv from "dotenv"
import db from "./config/db.js"
import restaurantsRouter from "./routes/restaurantsRoute.js"
import userRouter from "./routes/userRoute.js"
dotenv.config()



const app = express()
app.use(express.json())




app.get("/", (req, res) => {
    res.status(200).json({
        message: "RESTApi's Working"
    })
})

app.use("/api/restaurants", restaurantsRouter)
app.use("/api/user", userRouter)








const PORT = process.env.PORT
app.listen((PORT), () => {
    console.log(`Server working on PORT ${PORT}`)
})
import express from "express"

import { userSignUp, userLogin } from "../controllers/userControllers.js"


const userRouter = express.Router()


userRouter.post("/signup", userSignUp)
userRouter.post("/login", userLogin)

export default userRouter
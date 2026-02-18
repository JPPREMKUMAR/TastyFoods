import express from "express"
import { allRestaurants } from "../controllers/restaurantsControllers.js"


const restaurantsRouter = express.Router()

restaurantsRouter.get("/", allRestaurants)




export default restaurantsRouter

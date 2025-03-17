import express from 'express'
import { getPlants } from '../controllers/plantController.js'
import roleValidationMiddleware from '../middleware/roleValidationMiddleware.js'

const plantRouter = express.Router()

plantRouter.get('/', roleValidationMiddleware('owner'), getPlants)

export default plantRouter

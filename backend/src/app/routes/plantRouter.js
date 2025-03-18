import express from 'express'
import {
  getPlants,
  addPlant,
  updatePlant,
} from '../controllers/plantController.js'
import roleValidationMiddleware from '../middleware/roleValidationMiddleware.js'

const plantRouter = express.Router()

plantRouter.get(
  '/',
  roleValidationMiddleware('owner', 'manager', 'assistant'),
  getPlants
)

plantRouter.post('/', roleValidationMiddleware('owner', 'manager'), addPlant)

plantRouter.put(
  '/:id',
  roleValidationMiddleware('owner', 'manager'),
  updatePlant
)

export default plantRouter

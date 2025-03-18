import express from 'express'
import generateToken from '../controllers/tokenController.js'
import authValidationMiddleware from '../middleware/authValidationMiddleware.js'

const tokenRouter = express.Router()

tokenRouter.post('/', authValidationMiddleware, generateToken)

export default tokenRouter

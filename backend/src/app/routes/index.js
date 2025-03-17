import express from 'express'
import plantRouter from './plantRouter.js'
import tokenRouter from './authRouter.js'

const router = express.Router()

router.use('/plant', plantRouter)
router.use('/token', tokenRouter)

export default router

import express from 'express'
import stockRouter from './stockRouter.js'
import tokenRouter from './authRouter.js'

const router = express.Router()

router.use('/stock', stockRouter)
router.use('/token', tokenRouter)

export default router

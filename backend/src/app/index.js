import express from 'express'
import compression from 'compression'
import cors from 'cors'
import { CORS_ORIGINS } from '../config/index.js'
import router from './routes/index.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(compression())

const corsOptions = {
  origin: CORS_ORIGINS,
  optionsSuccessStatus: 200,
}
app.use(cors(corsOptions))

app.use(router)

app.use(express.static('./src/public'))

app.use((_, res) => res.status(404).json({ message: 'not found' }))

export default app

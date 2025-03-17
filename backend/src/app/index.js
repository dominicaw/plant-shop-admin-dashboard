import express from 'express'
import compression from 'compression'
import cors from 'cors'
import { CORS_ORIGINS } from '../config/index.js'
import router from './routes/index.js'
import path from 'path'

// Create Express server
const app = express()

// Make express use the json and urlencoded middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Add compression for responses
app.use(compression())

// Enable cors (i.e. Access-Control-Allow-* headers)
const corsOptions = {
  origin: CORS_ORIGINS,
  optionsSuccessStatus: 200, // For legacy browser support
}
app.use(cors(corsOptions))

// Add the application's routes to the app
// This allows us to split the different routes/endpoints into separate files
app.use(router)

// Serve static files to make live easy
app.use(express.static('./src/public'))

// Return 404 when none of the routes above apply
app.use((_, res) => res.status(404).json({ message: 'not found' }))

export default app

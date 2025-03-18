import dotenv from 'dotenv'

dotenv.config()

export const PORT = process.env.PORT || 8000
export const CORS_ORIGINS = process.env.CORS_ORIGINS || '*'
export const TOKEN_SECRET = process.env.TOKEN_SECRET
export const TOKEN_EXPIRY = process.env.TOKEN_EXPIRY || '1h'
export const DB_VENDOR = process.env.DB_VENDOR || 'inmemory'

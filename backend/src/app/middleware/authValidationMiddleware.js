import validator from 'validator'
import fs from 'fs'
import path from 'path'

const usersFilePath = path.resolve('src/data/users.json')
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'))

export default function authValidationMiddleware(req, res, next) {
  let { email, password } = req.body

  email = validator.normalizeEmail(email)
  password = password.trim()

  if (!email || !validator.isEmail(email) || !password) {
    return res.status(401).json({ error: 'Invalid credentials' })
  }

  const user = users.find((u) => u.email === email && u.password === password)
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' })
  }

  req.user = user

  next()
}

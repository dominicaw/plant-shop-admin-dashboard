import jwt from 'jsonwebtoken'
import { TOKEN_SECRET, TOKEN_EXPIRY } from '../../config/index.js'
import validator from 'validator'
import fs from 'fs'
import path from 'path'

const usersFilePath = path.resolve('src/data/users.json')
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'))

export const generateToken = (req, res) => {
  const { email, password } = req.body

  if (!email || !validator.isEmail(email) || !password) {
    return res.status(401).json({ error: 'Invalid credentials' })
  }

  const user = users.find((u) => u.email === email && u.password === password)
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' })
  }

  const token = jwt.sign(
    { email: user.email, roles: user.roles },
    TOKEN_SECRET,
    {
      expiresIn: TOKEN_EXPIRY,
    }
  )

  const { exp } = jwt.decode(token)
  const expiry_time = Math.floor((exp * 1000 - Date.now()) / 1000)

  return res.json({
    access_token: token,
    token_type: 'Bearer',
    expiry_time,
  })
}

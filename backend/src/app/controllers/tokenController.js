import jwt from 'jsonwebtoken'
import { TOKEN_SECRET, TOKEN_EXPIRY } from '../../config/index.js'

export const generateToken = (req, res) => {
  const user = req.user

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

import jwt from 'jsonwebtoken'
import { TOKEN_SECRET, TOKEN_EXPIRY } from '../../config/index.js'

export const generateToken = (req, res) => {
  // get user credentials from req.body,
  // then validate that the user exists
  // (return 401 if user doesn't exist),
  // and get the user's roles/permissions.
  // for now, we just assume the user is valid and has the roles/permissions
  const user = {
    ...req.body,
    roles: ['owner'],
  }

  const token = jwt.sign(user, TOKEN_SECRET, {
    expiresIn: TOKEN_EXPIRY,
  })

  const { exp } = jwt.decode(token)
  const expiry_time = ((exp * 1000 - Date.now()) / 1000) >> 0

  return res.json({
    access_token: token,
    token_type: 'Bearer',
    expiry_time,
  })
}

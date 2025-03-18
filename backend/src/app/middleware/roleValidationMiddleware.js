import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../../config/index.js'
import { intersection } from '../../utils/index.js'

export default function roleValidationMiddleware(...roles) {
  return (req, res, next) => {
    const targetRoles = roles.flat()

    const authHeader = req.headers.authorization
    if (!authHeader) {
      return res
        .set(
          'WWW-Authenticate',
          'Bearer realm="Access to the API", error="invalid_token", error_description="No token provided"'
        )
        .status(401)
        .json({ message: 'No token provided' })
    }

    const token = authHeader.split(' ')[1].trim()
    jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
      if (err) {
        let errorHeader

        if (err.name === 'TokenExpiredError') {
          errorHeader =
            'Bearer realm="Access to the API", error="invalid_token", error_description="Token has expired"'
        } else if (err.name === 'JsonWebTokenError') {
          errorHeader =
            'Bearer realm="Access to the API", error="invalid_token", error_description="Invalid token"'
        } else if (err.name === 'NotBeforeError') {
          errorHeader =
            'Bearer realm="Access to the API", error="invalid_token", error_description="Token is not active yet"'
        } else {
          errorHeader =
            'Bearer realm="Access to the API", error="invalid_token", error_description="Authentication failed"'
        }

        return res
          .set('WWW-Authenticate', errorHeader)
          .status(401)
          .json({ message: err.message })
      }

      if (!intersection(targetRoles, decoded.roles).length) {
        return res
          .set(
            'WWW-Authenticate',
            'Bearer realm="Access to the API", error="insufficient_scope", error_description="You do not have the required role"'
          )
          .status(403)
          .json({ message: 'Forbidden' })
      }
      next()
    })
  }
}

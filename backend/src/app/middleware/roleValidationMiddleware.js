import jwt from 'jsonwebtoken';
import {
    TOKEN_SECRET
} from '../../config/index.js';
import {
    intersection
} from '../../utils/index.js';

/**
 * @typedef {import('express').Request} Request
 * @typedef {import('express').Response} Response
 * @typedef {import('express').NextFunction} Next
 */

/**
 * Middleware function that checks if a user has the required role.
 *
 * @callback MiddlewareFunction
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @param {NextFunction} next - The Express next function.
 */

/**
 * Role validation middleware factory.
 *
 * @typedef {(roles: string | string[]) => MiddlewareFunction} RoleValidationMiddleware
 */

/**
 * @type {RoleValidationMiddleware}
 */
const roleValidationMiddleware = (...roles) => (req, res, next) => {
    // flatten the roles array
    // allows user to pass in arrays of roles, or single roles as arguments
    const targetRoles = roles.flat();

    // get the auth header
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res
            .set("WWW-Authenticate", 'Bearer realm="Access to the API", error="invalid_token", error_description="No token provided"')
            .status(401)
            .json({ message: 'No token provided' });
    }
    const token = authHeader.split(' ')[1].trim();
    jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
        if (err) {
            let errorHeader;

            if (err.name === "TokenExpiredError") {
                errorHeader = 'Bearer realm="Access to the API", error="invalid_token", error_description="Token has expired"';
            } else if (err.name === "JsonWebTokenError") {
                errorHeader = 'Bearer realm="Access to the API", error="invalid_token", error_description="Invalid token"';
            } else if (err.name === "NotBeforeError") {
                errorHeader = 'Bearer realm="Access to the API", error="invalid_token", error_description="Token is not active yet"';
            } else {
                errorHeader = 'Bearer realm="Access to the API", error="invalid_token", error_description="Authentication failed"';
            }

            return res
                .set("WWW-Authenticate", errorHeader)
                .status(401)
                .json({ message: err.message });
        }

        // target roles is an array, decoded.roles is an array
        // if the intersection between to two arrays is empty,
        // the user does not have the required role
        if (!intersection(targetRoles, decoded.roles).length) {
            return res
                .set("WWW-Authenticate", 'Bearer realm="Access to the API", error="insufficient_scope", error_description="You do not have the required role"')
                .status(403).json({ message: 'Forbidden' });
        }
        next();
    });
}

export default roleValidationMiddleware;
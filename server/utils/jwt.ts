import jwt, { JwtPayload } from "jsonwebtoken";

/**
 * Creates a JSON Web Token (JWT) with the provided data.
 * @param {any} data - The payload data to be encoded into the JWT.
 * @param {string} [duration="1d"] - The duration of the token's validity. Defaults to "1d" (1 day).
 * @returns {string} - The JWT token string.
 */
export const createJwtToken = (data: any, duration: string = "1d"): string => {
  return jwt.sign(data, "Kuch to secret hai", { expiresIn: duration });
};



/**
 * Verifies the authenticity and integrity of a JSON Web Token (JWT).
 * @param {string} token - The JWT token to be verified.
 * @returns {string|JwtPayload} - Returns the decoded payload if the token is valid, otherwise throws an error.
 * @throws {Error} - Throws an error if the token is invalid or expired.
 */
export const verifyJwtToken = (token:string): string | JwtPayload=>{
    return jwt.verify(token, "Kuch to secret hai");
}
const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.JWT_SECRET;

const requireAuth = (req, res, next) => {
    const auth = req.headers.authorization;
    if (auth) {
        const token = auth.split(' ')[1]; //extract the JWT token from the Authorization header of an HTTP request
        try {
            const decoded = jwt.verify(token, secret);
           console.log(decoded)
            next();
        } catch (err) {
            res.status(401).send("Error: Invalid or expired token");
        }
    } else {
        res.status(401).send("Error: Access Forbidden");
    }
}
module.exports = {requireAuth}
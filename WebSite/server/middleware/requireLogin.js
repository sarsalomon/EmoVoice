const jwt = require("jsonwebtoken");


module.exports = function requireLogin(req, res, next) {
    const token = res.header("x-auth-token")
    if (!token)
        return res.status(401).send("sizda token yo'q")

    try {
        const decoded = jwt.verify(token, "emovoice")
        req.user = decoded
        next()
    } catch (ex) {
        res.status(400).json("sizning tokeningiz yaroqsiz")
    }
}
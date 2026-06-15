const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post("/create", (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try{ // check if our server genrataed the token or not
       const decoded = jwt.verify(token, process.env.JWT_SECRET); // decoded just name
       console.log("Decoded Token:", decoded);  // obj - > id , iat - (time)
    } catch (err) {
        return res.status(401).json({ message: "Invalid token" });
    }
 

    console.log("Request Body:", req.body);
    console.log("Cookies:", req.cookies);
    res.json({ message: "Post created successfully", data: req.body, cookies: req.cookies });
});

module.exports = router;
const express = require("express"); 
// we can't require app.js and start making app.post , put .... so req express()
const router = express.Router();
// with help of this router we create api
const authController = require("../controllers/auth.controller");

const { registerUser } = require("../controllers/auth.controller");

// POST /api/auth/register

router.post("/register",authController.registerUser); // logic not here , in controller folder

router.get("/test", (req, res) => {
   console.log("Cookies:", req.cookies);
   res.json({ message: "Test route",
     cookies: req.cookies });
});


module.exports = router;
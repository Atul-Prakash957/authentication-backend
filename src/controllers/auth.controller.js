const userModel = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); // to create token(npm i jsonwebtoken)

async function registerUser(req, res) {

    const { username, email, password } = req.body;
    
    const isUserExist = await userModel.findOne({ email }); // check if user already(email)
    if (isUserExist) {
        return res.status(400).json({
             message: "User already exists" });
    }   

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({ // user create 
        username,
        email,
        password: hashedPassword
    });

    const token = jwt.sign( // creates token (use -> user data (unique)) , _id
        { id: user._id },
        process.env.JWT_SECRET, // to genrate random secret key
        { expiresIn: "1h" }
    );
    res.cookie("token", token); // saving token in cookie with name mama or token

    res.status(201).json({
        message: "User registered successfully",
        user,   // user and token sent as response again (we see in postman)
        token  // 
    });
}

module.exports = { // was empty obj but now register user property
    registerUser  // function 
};
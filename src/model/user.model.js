const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true,unique: true },
}, { timestamps: true });
 const userModel = mongoose.model('User', userSchema); // collection
 // Now userModel becomes a class/object through which you can interact with the database.
 module.exports = userModel;
        

const express = require('express');
const dotenv = require('dotenv').config();
const authRoutes = require('./routes/auth.routes');
const cookieParser = require('cookie-parser'); 
// cookie-parser is middleware that reads cookies sent by the browser and puts them into req.cookies.
// npm i cookie parser
const postRoutes = require('./routes/post.routes');
const app = express();   // it creates an express app obj use(define routes, add midleware, handle req,start serv)
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes); // prefix /api/auth" 
app.use("/api/post", postRoutes);


module.exports = app; 
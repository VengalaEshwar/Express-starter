const express = require('express');
const {PORT} = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');


const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

app.listen(PORT,async ()=>{
    console.log("connecting to db");
    await connectDB();
    console.log("stated at port "+ PORT);
})

//eshwarvengala30
// qMeiRe8pTlFMkjxC
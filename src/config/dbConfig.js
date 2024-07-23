const {DB_URL} = require('../config/serverConfig')
const mongoose = require('mongoose')
module.exports=async function connectDB(){
    try {
        await mongoose.connect(DB_URL);
        console.log("Successfully connected to mongodb");
        const db = mongoose.connection;
    } catch (error) {
        console.log("Not able to connected to mongodb" + error);
    }
} 

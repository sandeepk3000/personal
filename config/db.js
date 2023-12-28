const mongoose = require("mongoose");
const connectToDB=async()=>{
    try {
        const connects = await mongoose.connect("mongodb://127.0.0.1:27017/personalPort")
        console.log("your project is connected to db")
    } catch (error) {
        
    }
}
module.exports = connectToDB;
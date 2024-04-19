const mongoose = require ('mongoose');
const dotenv = require("dotenv")
dotenv.config({ path: './config.env'})
const mongoURI = process.env.DATABASE;
mongoose.set('strictQuery', false);
const connectToMongo = async()=>{
    await mongoose.connect(mongoURI, ()=>{
        console.log("Connect To Mongo Successfully");
    })
}
module.exports = connectToMongo;
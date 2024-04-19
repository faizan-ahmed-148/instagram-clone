const express = require ("express");
const cookieParser = require('cookie-parser');
const connectToMongo = require ("./db/conn")
connectToMongo();
const dotenv =  require ("dotenv")
const post = require("./routes/post")
const user = require("./routes/user")
const cloudinary = require("cloudinary")
dotenv.config({ path: './config.env'})
const app = express()

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({ limit: "50mb", extended: true}))
app.use(cookieParser())



app.use("/api/vi", post)
app.use("/api/vi", user)

// heruku setup 
const PORT = process.env.PORT || 5000;


if ( process.env.NODE_ENV == "production"){

  app.use(express.static("frontened/build"));

  const path = require("path");

  app.get("*", (req, res) => {

      res.sendFile(path.resolve(__dirname, 'frontened', 'build', 'index.html'));

  })


}


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })
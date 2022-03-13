// nodejs ishini osonlashtirish uchun express fremvorkini import qilish  
const express = require("express");
// malumotlar bazasi bilan ishlash uchun mongoose npm paketini import qilisj
const mongoose = require("mongoose");
// express libraryni app obyektiga olish
const app = express()
// loyihada JSON xususiyatini ishlatish
app.use(express.json())
const Post = require("./models/Post")
// loyiha serveri nechanchi portda ishga tushishi
const PORT = 5000;
// express fileupload kutubxonasini import qilish
const upload = require("express-fileupload")
// import qilingan kutubxonani loyihamizga qo'shib olamiz
app.use(upload())
// corsni import qilish
const cors = require('cors');
// corsni loyihamizga qo'shish
app.use(cors())

// Loyihada routeslarni import qilish
const authRouter = require("./routes/auth")
const postRouter = require("./routes/post");

// mongoosening connect metodi yordamida onlayn mongodb malumotlar bazasiga ulanish
mongoose.connect("mongodb+srv://kuldashev:mO5JzQd3x8annG8z@cluster0.blges.mongodb.net/emovoices?retryWrites=true&w=majority", {
    useNewUrlParser: true
}).then(() => {
    console.log("mongodb ulandi") // agar mongodbga ulanish muvafaquyatli bo'lsa consolega mongodb ulandi yozuvini chiqarish
})
    .catch(error => {
        console.log("mongodb ulanishida xato", error) // agar mongodbga ulanish xato bo'lsa, ulanishdagi xatoni chiqarish
    })


// loyihada yo'llarni ko'rsatish

// registration va login uchun api
app.use("/api/auth", authRouter)
// yangi sound file yaratish uchun api
app.use("/api/post", postRouter)

// loyihani ishga tushirish
app.listen(PORT, () => {
    console.log(`backend ishga ${PORT}da tushdi`)
})
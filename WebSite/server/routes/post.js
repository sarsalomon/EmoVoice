// loyiha uchun kerakli npm paketlarni import qilish 
// expressning Router methodini router doimiysiga saqlash
const router = require("express").Router();
// Post modelini models papkasidan import qilish
const Post = require("../models/Post")
// middleware funcsiyasini import qilish
const requireLogin = require('../middleware/requireLogin')
// express kutubxonasini import qilish
const express = require("express");
// import qilingan express kutubxonasini app obektiga olish
const app = express()
// faylarni yuklash uchun mo'ljallangan kutubxonani import qilish
const upload = require("express-fileupload")
// import qilingan express-flieupload kutubconasini app.use orqali loyihamizga qoshish
app.use(upload())


// yangi ovozli fayl yaratish
router.post("/create", async (req, res) => {
    try {
        if (req.files) { // agar bodydan file kelsa quidagi ammallar bajarilsin
            // foydalanuvchi tomonidan kiritilgan fileni file o'zgaruvchisiga saqlash
            let file = req.files.file
            // file o'zgaruvchisida turgan filening nomini filename o'zgaruvchisiga saqlash
            let filename = file.name

            // kiritilgan fileni sound papkasiga yuklash
            file.mv("./sound/" + filename, async function (error) {
                if (error) { // agar yulashda xato bo'lsa , xato xabari chiqarilsin
                    res.status(400).json(error)
                } else {
                    // agar hammasi to'gri bajarilsa  mongodb bazasiga filening nomini saqlash
                    const post = await new Post({
                        soundFile: filename
                    })
                    await post.save() // malumotlarni bazaga saqlash
                    res.status(200).json("file uploaded") // hammasi omadli bajarildi
                }
            })
        }
    } catch (error) {
        // yuqoridagilar xato bajarilsa error xabari chiqsin
        res.status(500).json(error)
    }
})

// get post by id 
router.get("/:id", async(req, res) => { // malumotlarni id orqali import qilish
    try {
        // Post modelidan id orqali topilgan malumotni post doimiysiga saqlash
        const post = await Post.findById(req.params.id)
        // natijani qaytarish
        res.status(200).json(post)
    } catch (error) {
        // xato xabar chiqsa error chiqsin
        res.status(500).json(error)
    }
})

// get all 
router.get("/", async(req, res) => { // malumotlarni hammasini olish
    try {
        // Post modelidan topilgan malumotni post doimiysiga saqlash
        const post = await Post.find()
        // natijani qaytarish
        res.status(200).json(post)
    } catch (error) {
        // xato xabar chiqsa error chiqsin
        res.status(500).json(error)
    }
})

// router modulini export qilush
module.exports = router
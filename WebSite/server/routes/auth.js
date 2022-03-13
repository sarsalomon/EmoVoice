// loyiha uchun kerakli npm paketlarni import qilish 
// expressning Router methodini router doimiysiga saqlash
const router = require("express").Router();
// User modelini models papkasidan import qilish
const User = require("../models/User")
// malumotlarning xavfsizligini taminlash uchun bcrypt kutubxonasini import qilish
const bcrypt = require("bcrypt")
// 
const Joi = require("joi")
const jwt = require("jsonwebtoken")


// foydalanuvchilarni ro'yxatga olish uchun api
router.post("/registration", async (req, res) => {
    const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    try {
        const { email, password } = req.body
        if (!email || !password)
            return res.status(400).send("Email yoki parolni kiriting")
        // bcryptning salt metodi orqali parol bazaga qancha uzunlikda kiritilishini ko'rsatish
        const salt = await bcrypt.genSalt(8)
        // foydalanuvchi tomonidan kiritilgan parolni hash qilib, uni qancha uzunlida bo'lishini salt doimiysi orqali ko'rsatish
        const hashedPassword = await bcrypt.hash(password, salt) // hashlangan parolni hashedpassword doimiysiga saqlash
        // foydalanuvchi tomonidan kiritilgan malumotlarni newUser doimiysiga qalash
        const newUser = new User({ // newUser obekti mongodb bazamizdagi User collections ekanini ko'rsatish
            email: email, // foydalanuvchi tomidan kiritilgan emailni NewUser obektini email metodiga kirgazish
            password: hashedPassword, // foydalanuvchi tomidan kiritilgan keyin esa heshlangan parolni NewUser obektini password metodiga kirgazish
        })
        // newUser obektini mongodb bazasiga saqlash va buni user doimiysiga saqlash
        const user = await newUser.save()

        // agar user muvafaqiyatli qo'shilsa, natijada success qaytishi
        res.status(200).json("success")
    } catch (error) {
        // agar foydalanuvchini ro'yxatga olish amalga oshmasa server xatosi:  500 chiqarilsin 
        res.status(500).json(error)
    }
})

// login part
router.post("/login", async (req, res) => {
    try {
        // foydalanuvchi tomodidan kiritilgan emailni topib olib user doimiysiga saqlash
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            res.status(400).json("email yoki parol xato") // agar bunday foydalanuvhi bo'lmasa email yoki parol xato xabar chiqishi
        }
        // agar topib olingan userning paroli foydalanuvchi kiritgan parol bilan bir xil bo'lsa token qaytadi , aks holda xato xabari
        const validationPassword = await bcrypt.compare(req.body.password, user.password)
        if(!validationPassword) {
            res.status(400).json("email yoki parol xato")
        }

        // yuqoridagi 2 tekshiruvdan keyin , foydalanuvchi malumotlarni to'g'ri kirgazsa uning uchun maxsus token qaytishi
        // const token = jwt.sign({_id: user._id}, "efvsevert!fv#?efv/sd")
        // va nativa token va successfully xabaris
        res.status(200).json(user)
    } catch (error) {
        // yuqoridagi hech bir xolat to'g'ri bo'lmasa, serverniy xato 500 kodi chiqsin
        res.status(500).json(error)
    }
})

// touter modulini export qilush
module.exports = router
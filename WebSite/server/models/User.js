// mongodbdan foydalanish uchun mongoose kutubxonasini import qilish
const mongoose = require("mongoose");
// validatsiya uchun joi kutubxonasini ulash
const Joi = require("joi");

// mongodbdagi users collectionga malumotlar qanday shaklda tushishini aniqlash
const UserSchema = new mongoose.Schema({ // yang userchame obektini mongose schema ekanini yozish
    // email uchun 
    email: {
        type: String, // bu malumot bazaga String xolida tushushini belilash
        required: true, // email yozilishi shart
        unique: true, // bitta email faqat bir marta kirgazilishi kerak
        minlength: 3, // malumot kamida 3 ta belgidan iborat bo'lishi
        maxlength: 200 // malumot ko'pida 100 ta belgidan iborat bo'lishi
    },
    // parol uchun
    password: {
        type: String, // malumot turi string 
        required: true, // yozilishi shart
        minlength: 5, // malumot kamida 8 ta belgidan iborat bo'lishi
        maxlength: 100 // malumot ko'pida 100 ta blgidan iborat bo'lishi
    },
}, {
    timestamps: true // yangi User bazaga qaysi vaqtda kirgazilganini aniqlash
})

// user modelini User doimiysiga saqlash
module.exports = mongoose.model("User", UserSchema)
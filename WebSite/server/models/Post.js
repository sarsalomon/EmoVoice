// mongodbdan foydalanish uchun mongoose kutubxonasini import qilish
const mongoose = require("mongoose");


// mongodbdagi posts collectionga malumotlar qanday shaklda tushishini aniqlash
const UserSchema = new mongoose.Schema({ // yang postschema obektini mongose schema ekanini yozish
    // soundfile uchun 
    soundFile: {
        type:String, // bu malumot bazaga String xolida tushushini belilash
        required: true, // soundfile yozilishi shart
    },
}, {
    timestamps: true // yangi Post bazaga qaysi vaqtda kirgazilganini aniqlash
})

// post  modelini export qilish
module.exports = mongoose.model("Post", UserSchema)
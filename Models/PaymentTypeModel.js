const mongoose = require("mongoose")
const Schema = mongoose.Schema

const paymentTypeSchema = new Schema({
    
    paymentType:{
        type:String
    },
})

module.exports = mongoose.model("PaymentType", paymentTypeSchema);
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const currencyTypeSchema = new Schema({
    currencyType:{
        type:String
    },
})

module.exports = mongoose.model("CurrencyType",currencyTypeSchema);
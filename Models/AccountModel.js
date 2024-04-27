const mongoose = require("mongoose")
const Schema = mongoose.Schema

const accountSchema = new Schema({
    
    createdAt:{
        type: Date
    },

    balance:{
        type: Number
    },

    currencyType: {
        type: Schema.Types.ObjectId,
        ref:"CurrencyType"
    },

    default: {
        type: String
    },

    user: {
        type: Schema.Types.ObjectId,
        ref:"User"
    },

    accountType:{
        type: String
    }
})

module.exports = mongoose.model("Account", accountSchema);
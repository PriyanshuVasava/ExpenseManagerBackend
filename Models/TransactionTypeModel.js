const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionTypeSchema = new Schema({

    transactionType:{
        type: String
    }
})

module.exports = mongoose.model("TransactionType", transactionTypeSchema)
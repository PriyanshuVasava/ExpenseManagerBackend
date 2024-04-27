const mongoose = require("mongoose")
const Schema = mongoose.Schema

const transactionSchema = new Schema({

    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
   
    // payee: {
    //     type: Schema.Types.ObjectId,
    //     ref: "Payee",
    // },

    category: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    },

    // subCategory: {
    //     type: Schema.Types.ObjectId,
    //     ref: "SubCategory"
    // },

    paymentType: {
        type: Schema.Types.ObjectId,
        ref: "PaymentType"
    },

    transactionType:{
        type: Schema.Types.ObjectId,
        ref:"TransactionType",
    },

    goal:{
        type: Schema.Types.ObjectId,
        ref: "Goal",
        // default:null
    },

    amount:{
        type: Number
    },

    transactionDateTime:{
        type: Date
    },

    status:{
        type: String
    },

    description:{
        type: String
    },

    title:{
        type: String
    },

})

module.exports = mongoose.model("Transaction", transactionSchema);
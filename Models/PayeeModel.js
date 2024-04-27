const mongoose = require("mongoose")
const Schema = mongoose.Schema

const payeeSchema = new Schema({
   
    user: {
        type: Schema.Types.ObjectId,
        ref:"User"
    },

    payeeName:{
        type:String,
        require: true
    }
})

module.exports = mongoose.model("Payee", payeeSchema);
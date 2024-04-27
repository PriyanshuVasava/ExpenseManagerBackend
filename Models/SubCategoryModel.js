const mongoose = require("mongoose")
const Schema = mongoose.Schema

const subCategorySchema = new Schema({
    
    subCategoryName:{
        type: String
    },

    category: {
        type: Schema.Types.ObjectId,
        ref:"Category"
    }
})

module.exports = mongoose.model("SubCategory",subCategorySchema);
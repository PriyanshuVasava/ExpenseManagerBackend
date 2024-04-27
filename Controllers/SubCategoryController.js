const subCategorySchema = require("../Models/SubCategoryModel");

const createSubCategory = async (req, res) => {
   
    try{
        const createdSubCategory = await subCategorySchema.create(req.body);
        
        res.status(201).json({
            message:"subCategory created successfully",
            data:createdSubCategory,
            flag:1
        })
    } catch(err){
        res.status(500).json({
            message:"error creating subCategory",
            error:err,
            flag:-1
        })
    }
}

const getSubCategory = async (req, res) => {
   
    try{
        const subCategoryData = await subCategorySchema.find();
        
        res.status(200).json({
            message:"getSubCategory...",
            data:subCategoryData,
            flag:1
        })
    } catch(err){
        res.status(404).json({
            message:"error getting subCategory",
            error:err,
            flag:-1
        })
    }
}

const getSubCategoryById = async (req, res) => {
   
    try{
        const subCategory = await subCategorySchema.findById(req.params.id);
        
        res.status(200).json({
            message:"subCategory found",
            data:subCategory,
            flag:1
        })
    } catch(err){
        res.status(404).json({
            message:"subCategory not found",
            error:err,
            flag:-1
        })
    }
}

const updateSubCategoryById = async (req, res) => {
   
    try{
        const id = req.params.id;
        const newData = req.body;

        const updatedSubCategory = await subCategorySchema.findByIdAndUpdate(id, newData);
        
        res.status(200).json({
            message:"subCategory updated successfully",
            data:updatedSubCategory,
            flag:1
        })
    } catch(err){
        res.status(404).json({
            message:"error updating subCategory",
            error:err,
            flag:-1
        })
    }
}

const deleteSubCategoryById = async (req, res) => {
   
    try{
        const deletedSubCategory = await subCategorySchema.findByIdAndDelete(req.params.id);
        
        res.status(200).json({
            message:"subCategory deleted successfully",
            data:deletedSubCategory,
            flag:1
        })
    } catch(err){
        res.status(404).json({
            message:"error deleting subCategory",
            error:err,
            flag:-1
        })
    }
}

module.exports = {
    createSubCategory,
    getSubCategory,
    getSubCategoryById,
    updateSubCategoryById,
    deleteSubCategoryById
}
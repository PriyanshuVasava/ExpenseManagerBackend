const categorySchema = require("../Models/CategoryModel");

const createCategory = async (req, res) => {
    try {
        const createdCategory = await categorySchema.create(req.body);

        res.status(201).json({
            message: 'category created successfully',
            data: createdCategory,
            flag: 1
        })
    } catch (err) {
        res.status(500).json({
            message: 'error creating category',
            error: err,
            flag: -1
        })
    }
}

const getCategory = async (req, res) => {

    try {
        const categoryData = await categorySchema.find();

        res.status(200).json({
            message: "getCategory...",
            data: categoryData,
            flag: 1
        })
    } catch (err) {
        res.status(404).json({
            message: "error getting data",
            error: err,
            flag: -1
        })
    }
}

const getCategoryById = async (req, res) => {
    try {
        const category = await categorySchema.findById(req.params.id);

        res.status(200).json({
            message: 'category found',
            data: category,
            flag: 1
        })
    } catch (err) {
        res.status(404).json({
            message: 'category not found',
            error: err,
            flag: -1
        })
    }
}

const updateCategoryById = async (req, res) => {
    try {
        const id = req.params.id;
        const newData = req.body;

        const updatedCategory = await categorySchema.findByIdAndUpdate(id, newData);

        res.status(201).json({
            message: 'category updated successfully',
            data: updatedCategory,
            flag: 1
        })
    } catch (err) {
        res.status(404).json({
            message: 'error updating category',
            error: err,
            flag: -1
        })
    }
}

const deleteCategoryById = async (req, res) => {
    try {
        const deletedCategory = await categorySchema.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: 'category deleted successfully',
            data: deletedCategory,
            flag: 1
        })
    } catch (err) {
        res.status(404).json({
            message: 'error deleting category',
            error: err,
            flag: -1
        })
    }
}

module.exports = {
    createCategory,
    getCategory,
    getCategoryById,
    updateCategoryById,
    deleteCategoryById
}
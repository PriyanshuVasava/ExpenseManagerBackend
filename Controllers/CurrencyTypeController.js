const currencyTypeSchema = require("../Models/CurrencyTypeModel");

const createCurrencyType = async (req, res) => {
    try {
        const createdCurrencyType = await currencyTypeSchema.create(req.body);

        res.status(201).json({
            message: 'currencyType created successfully',
            data: createdCurrencyType,
            flag: 1
        })
    } catch (err) {
        res.status(500).json({
            message: 'error creating currencyType',
            error: err,
            flag: -1
        })
    }
}

const getCurrencyType = async (req, res) => {

    try {
        const currencyTypeData = await currencyTypeSchema.find();

        res.status(200).json({
            message: "getCurrencyType...",
            data: currencyTypeData,
            flag: 1
        })
    } catch (err) {
        res.status(404).json({
            message: "error getting currencyType",
            error: err,
            flag: -1
        })
    }
}

const getCurrencyTypeById = async (req, res) => {
    try {
        const currencyType = await currencyTypeSchema.findById(req.params.id);

        res.status(200).json({
            message: 'currencyType found',
            data: currencyType,
            flag: 1
        })
    } catch (err) {
        res.status(404).json({
            message: 'currencyType not found',
            error: err,
            flag: -1
        })
    }
}

const updateCurrencyTypeById = async (req, res) => {
    try {
        const id = req.params.id;
        const newData = req.body;

        const updatedCurrencyType = await currencyTypeSchema.findByIdAndUpdate(id, newData);

        res.status(200).json({
            message: 'currencyType updated successfully',
            data: updatedCurrencyType,
            flag: 1
        })
    } catch (err) {
        res.status(404).json({
            message: 'error updating currencyType',
            error: err,
            flag: -1
        })
    }
}

const deleteCurrencyTypeById = async (req, res) => {
    try {
        const deletedCurrencyType = await currencyTypeSchema.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: 'currencyType deleted successfully',
            data: deletedCurrencyType,
            flag: 1
        })
    } catch (err) {
        res.status(404).json({
            message: 'error creating currencyType',
            error: err,
            flag: -1
        })
    }
}

module.exports = {
    createCurrencyType,
    getCurrencyType,
    getCurrencyTypeById,
    updateCurrencyTypeById,
    deleteCurrencyTypeById
}
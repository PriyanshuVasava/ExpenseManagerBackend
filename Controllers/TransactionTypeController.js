const transactionTypeSchema = require("../Models/TransactionTypeModel");

const createTransactionType = async (req, res) => {

    try {
        const createdTransactionType = await transactionTypeSchema.create(req.body);

        res.status(201).json({
            message: "transactionType created successfully",
            data: createdTransactionType,
            flag:1
        })
    } catch (err) {
        res.status(500).json({
            message: "error creating transactionType",
            error: err,
            flag:-1
        })
    }
}

const getTransactionType = async (req, res) => {

    try {
        const transactionTypeData = await transactionTypeSchema.find();

        res.status(200).json({
            message: "getTransactionType...",
            data: transactionTypeData,
            flag:1
        })
    } catch (err) {
        res.status(404).json({
            message: "error getting transactionType",
            error: err,
            flag:-1
        })
    }
}

const getTransactionTypeById = async (req, res) => {

    try {
        const transactionType = await transactionTypeSchema.findById(req.params.id);

        res.status(200).json({
            message: "transactionType found",
            data: transactionType,
            flag:1
        })
    } catch (err) {
        res.status(404).json({
            message: "transactionType not found",
            error: err,
            flag:-1
        })
    }
}

const updateTransactionTypeById = async (req, res) => {

    try {
        const id = req.params.id;
        const newData = req.body;

        const updatedTransactionType = await transactionTypeSchema.findByIdAndUpdate(id, newData);

        res.status(200).json({
            message: "transactionType updated successfully",
            data: updatedTransactionType,
            flag:1
        })
    } catch (err) {
        res.status(404).json({
            message: "error updating transactionType",
            error: err,
            flag:-1
        })
    }
}

const deleteTransactionTypeById = async (req, res) => {

    try {
        const deletedTransactionType = await transactionTypeSchema.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "transactionType deleted successfully",
            data: deletedTransactionType,
            flag:1
        })
    } catch (err) {
        res.status(404).json({
            message: "error deleting transactionType",
            error: err,
            flag:-1
        })
    }
}

module.exports = {
    createTransactionType,
    getTransactionType,
    getTransactionTypeById,
    updateTransactionTypeById,
    deleteTransactionTypeById
}
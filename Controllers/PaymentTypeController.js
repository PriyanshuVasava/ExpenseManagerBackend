const paymentTypeSchema = require("../Models/PaymentTypeModel");

const createPaymentType = async (req, res) => {

    try {
        const createdPaymentType = await paymentTypeSchema.create(req.body);

        res.status(201).json({
            message: "paymentType created successfully",
            data: createdPaymentType,
            flag: 1
        })
    } catch (err) {
        res.status(500).json({
            message: "error creating paymentType",
            error: err,
            flag: -1
        })
    }
}

const getPaymentType = async (req, res) => {

    try {
        const paymentTypeData = await paymentTypeSchema.find();

        res.status(200).json({
            message: "getPaymentType...",
            data: paymentTypeData,
            flag: 1
        })
    } catch (err) {
        res.status(404).json({
            message: "error getting paymentType",
            error: err,
            flag: -1
        })
    }
}

const getPaymentTypeById = async (req, res) => {

    try {
        const paymentType = await paymentTypeSchema.findById(req.params.id);

        res.status(200).json({
            message: "paymentType found",
            data: paymentType,
            flag: 1
        })
    } catch (err) {
        res.status(404).json({
            message: "paymentType not found",
            error: err,
            flag: -1
        })
    }
}

const updatePaymentTypeById = async (req, res) => {

    try {
        const id = req.params.id;
        const newData = req.body;

        const updatedPaymentType = await paymentTypeSchema.findByIdAndUpdate(id, newData);

        res.status(200).json({
            message: "paymentType updated successfully",
            data: updatedPaymentType,
            flag: 1
        })
    } catch (err) {
        res.status(404).json({
            message: "error updating paymentType",
            error: err,
            flag: -1
        })
    }
}

const deletePaymentTypeById = async (req, res) => {
   
    try{
        const deletedPaymentType = await paymentTypeSchema.findByIdAndDelete(req.params.id);
        
        res.status(200).json({
            message:"paymentType deleted successfully",
            data:deletedPaymentType,
            flag:1
        })
    } catch(err){
        res.status(404).json({
            message:"error deleting paymentType",
            error:err,
            flag:-1
        })
    }
}

module.exports = {
    createPaymentType,
    getPaymentType,
    getPaymentTypeById,
    updatePaymentTypeById,
    deletePaymentTypeById
}
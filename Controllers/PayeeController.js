const payeeSchema = require("../Models/PayeeModel");

const createPayee = async (req, res) => {
   
    try{
        const createdPayee = await payeeSchema.create(req.body);
        
        res.status(201).json({
            message:"payee created successfully",
            data:createdPayee,
            flag:1
        })
    } catch(err){
        res.status(500).json({
            message:"error creating payee",
            error:err,
            flag:-1
        })
    }
}

const getPayee = async (req, res) => {
   
    try{
        const payeeData = await payeeSchema.find();
        
        res.status(200).json({
            message:"getPayee...",
            data:payeeData,
            flag:1
        })
    } catch(err){
        res.status(404).json({
            message:"error getting payee",
            error:err,
            flag:-1
        })
    }
}

const getPayeeById = async (req, res) => {
   
    try{
        const payee = await payeeSchema.findById(req.params.id);
        
        res.status(200).json({
            message:"payee found",
            data:payee,
            flag:1
        })
    } catch(err){
        res.status(404).json({
            message:"payee not found",
            error:err,
            flag:-1
        })
    }
}

const updatePayeeById = async (req, res) => {
   
    try{
        const id = req.params.id;
        const newData = req.body;

        const updatedPayee = await payeeSchema.findByIdAndUpdate(id, newData);
        
        res.status(200).json({
            message:"payee updated successfully",
            data:updatedPayee,
            flag:1
        })
    } catch(err){
        res.status(404).json({
            message:"error updating payee",
            error:err,
            flag:-1
        })
    }
}

const deletePayeeById = async (req, res) => {
   
    try{
        const deletedPayee = await payeeSchema.findByIdAndDelete(req.params.id);
        
        res.status(200).json({
            message:"payee deleted successfully",
            data:deletedPayee,
            flag:1
        })
    } catch(err){
        res.status(404).json({
            message:"error deleting payee",
            error:err,
            flag:-1
        })
    }
}

module.exports = {
    createPayee,
    getPayee,
    getPayeeById,
    updatePayeeById,
    deletePayeeById
}
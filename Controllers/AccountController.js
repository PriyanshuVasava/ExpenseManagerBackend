const accountSchema = require("../Models/AccountModel");

const createAccount = async (req, res) => {
    try {
        const createdAccount = await accountSchema.create(req.body);

        res.status(201).json({
            message: "account created successfully",
            data: createdAccount,
            flag: 1
        })

    } catch (err) {
        res.status(500).json({
            message: "error creating account",
            error: err,
            flag: -1
        })
    }
}

const getAccount = async (req, res) => {
    try {
        const accountData = await accountSchema.find();

        res.status(200).json({
            message: "getAccount...",
            data: accountData,
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

const getAccountById = async (req, res) => {
    try {
        const account = await accountSchema.findById(req.params.id);
        res.status(200).json({
            message: 'account found',
            data: account,
            flag: 1
        })
    } catch (err) {
        res.status(404).json({
            message: 'account not found',
            error: err,
            flag: -1
        })
    }
}

const updateAccountById = async (req, res) => {
    try{
        const id = req.params.id;
        const newData = req.body;

        const updatedAccount = await accountSchema.findByIdAndUpdate(id, newData);
        res.status(200).json({
            message:'account updated successfully',
            data:updatedAccount,
            flag:1
        })
    }catch(err){
        res.status(404).json({
            message:'error updating account',
            error:err,
            flag:-1
        })
    }
}

const deleteAccountById = async(req, res) => {
    try{
        const deletedAccount = await accountSchema.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message:'account deleted successfully',
            data:deletedAccount,
            flag:1
        })
    }catch(err){
        res.status(404).json({
            message:'error deleting account',
            error:err,
            flag:-1
        })
    }
}

module.exports = {
    createAccount,
    getAccount,
    getAccountById,
    updateAccountById,
    deleteAccountById
}
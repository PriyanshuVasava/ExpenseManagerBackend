const transactionSchema = require("../Models/TransactionModel");

const createTransaction = async (req, res) => {

    const trData = req.body;
    //console.log("body...", trData);
    let trToCreate = {};

    if (trData.goal === undefined || trData.goal === "") {
        trToCreate = Object.assign(trData, { goal: null });
        // console.log("tr data...", trToCreate);
    } else {
        trToCreate = req.body
    }

    try {
        const createdTransaction = await transactionSchema.create(trToCreate);

        res.status(201).json({
            message: "transaction created successfully",
            data: createdTransaction,
            flag: 1
        })
    } catch (err) {
        res.status(500).json({
            message: "error creating transaction",
            error: err,
            flag: -1
        })
    }
}

const getTransaction = async (req, res) => {

    try {
        const transactionData = await transactionSchema.find().populate([
            { path: 'user' },
            // { path: 'payee' },
            { path: 'category' },
            { path: 'paymentType' },
            { path: 'transactionType' },
            { path: 'goal' }
        ]);

        res.status(200).json({
            message: "getTransaction...",
            data: transactionData,
            flag: 1
        })
    } catch (err) {
        res.status(404).json({
            message: "error getting transaction",
            error: err,
            flag: -1
        })
    }
}

const getTransactionById = async (req, res) => {

    try {
        const transaction = await transactionSchema.findById(req.params.id).populate([
            { path: 'user', select: 'firstName -_id' },
            // { path: 'payee', select: 'payeeName -_id' },
            { path: 'category', select: 'categoryName -_id' },
            { path: 'paymentType', select: 'paymentType -_id' },
            { path: 'transactionType', select: 'transactionType -_id' },
            { path: 'goal', select: 'goalName' }
        ]);

        res.status(200).json({
            message: "transaction found",
            data: transaction,
            flag: 1
        })
    } catch (err) {
        res.status(404).json({
            message: "transaction not found",
            error: err,
            flag: -1
        })
    }
}

const updateTransactionById = async (req, res) => {

    const newData = req.body;
    //console.log("body...", newData);
    let trToCreate = {};

    if (newData.goal === undefined || newData.goal === "") {
        trToCreate = Object.assign(newData, { goal: null });
        // console.log("tr data...", trToCreate);
    } else {
        trToCreate = req.body
    }
    try {
        const id = req.params.id;

        const updatedTransaction = await transactionSchema.findByIdAndUpdate(id, trToCreate);

        res.status(200).json({
            message: "transaction updated successfully",
            data: updatedTransaction,
            flag: 1
        })
    } catch (err) {
        res.status(500).json({
            message: "error updating transaction",
            error: err,
            flag: -1
        })
    }
}

const deleteTransactionById = async (req, res) => {

    try {
        const deletedTransaction = await transactionSchema.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "transaction deleted successfully",
            data: deletedTransaction,
            flag: 1
        })
    } catch (err) {
        res.status(404).json({
            message: "error deleting transaction",
            error: err,
            flag: -1
        })
    }
}

const getTransactionByUserId = async (req, res) => {

    try {
        const id = req.body.userId;
        // console.log('user id..', id);
        const transactionData = await transactionSchema.find({ user: id }).populate([
            { path: 'user' },
            // { path: 'payee' },
            { path: 'category' },
            { path: 'paymentType' },
            { path: 'transactionType' },
            { path: 'goal' }
        ]);

        res.status(200).json({
            message: 'transaction found',
            data: transactionData,
            flag: 1
        })
    } catch (err) {
        res.status(404).json({
            message: 'transaction not found',
            error: err,
            flag: -1
        })
    }
}

const getFilteredTransactionByUserId = async (req, res) => {

    try {
        const id = req.params.id;
        //    console.log('user id..', id);
        //    console.log('req. query..', req.query.title);

        const transactionData = await transactionSchema.find({ user: id, title: { $regex: req.query.title } }).populate([
            { path: 'user' },
            // { path: 'payee' },
            { path: 'category' },
            { path: 'paymentType' },
            { path: 'transactionType' },
            { path: 'goal' }
        ]);

        res.status(200).json({
            message: 'transaction found',
            data: transactionData,
            flag: 1
        })
    } catch (err) {
        res.status(404).json({
            message: 'transaction not found',
            data: [],
            flag: -1
        })
    }
}

const updateManyTr = async (req, res) => {
    try {
        console.log("body...", req.body);
        const updatedTr = await transactionSchema.updateMany({}, { $set: { goal: req.body.goal } });
        if (updatedTr) {
            res.status(200).json({
                message: "transactions updated successfully",
                data: updatedTr,
                flag: 1
            })
        }
    } catch (err) {
        res.status(500).json({
            message: "error updating transactions",
            error: err,
            flag: -1
        })
    }
} // why this function? : updations of old documents required due to addition of new field "goal", in existing "transactionSchema", 

module.exports = {
    createTransaction,
    getTransaction,
    getTransactionById,
    updateTransactionById,
    deleteTransactionById,
    getTransactionByUserId,
    getFilteredTransactionByUserId,
    updateManyTr,
}
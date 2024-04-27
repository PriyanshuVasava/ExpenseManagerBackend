const goalSchema = require("../Models/ExpenseGoalModel");
const transactionSchema = require("../Models/TransactionModel");

const createGoal = async (req, res) => {
   
    try{
        const createdGoal = await goalSchema.create(req.body);
        
        res.status(201).json({
            message:"goal created successfully",
            data:createdGoal,
            flag:1
        })
    } catch(err){
        res.status(500).json({
            message:"error creating goal",
            error:err,
            flag:-1
        })
    }
}

const getGoal = async (req, res) => {
   
    try{
        const goalData = await goalSchema.find();
        
        res.status(200).json({
            message:"getGoal...",
            data:goalData,
            flag:1
        })
    } catch(err){
        res.status(404).json({
            message:"error getting goal",
            error:err,
            flag:-1
        })
    }
}

const getGoalById = async (req, res) => {
   
    try{
        const goal = await goalSchema.findById(req.params.id);
        
        res.status(200).json({
            message:"goal found",
            data:goal,
            flag:1
        })
    } catch(err){
        res.status(404).json({
            message:"goal not found",
            error:err,
            flag:-1
        })
    }
}

const updateGoalById = async (req, res) => {
   
    try{
        const id = req.params.id;
        const newData = req.body;

        const updatedGoal = await goalSchema.findByIdAndUpdate(id, newData);
        
        res.status(200).json({
            message:"goal updated successfully",
            data:updatedGoal,
            flag:1
        })
    } catch(err){
        res.status(404).json({
            message:"error updating goal",
            error:err,
            flag:-1
        })
    }
}

const deleteGoalById = async (req, res) => {
   
    try{
        const deletedTransactions = await transactionSchema.deleteMany({goal:req.params.id});
        const deletedGoal = await goalSchema.findByIdAndDelete(req.params.id);
        
        res.status(200).json({
            message:"goal and it's releted transactions deleted successfully",
            data:deletedGoal,
            flag:1
        })
    } catch(err){
        res.status(404).json({
            message:"error deleting goal",
            error:err,
            flag:-1
        })
    }
}
const getGoalByUserId = async (req, res) => {
    try{
        const goalData = await goalSchema.find({user:req.params.id}).populate("user");

        res.status(200).json({
            message:"goal found",
            data:goalData,
            flag:1
        })

    }catch(err) {
        res.status(404).json({
            message:"error getting goal",
            error:err,
            flag:-1
        })
    }
}

module.exports = {
    createGoal,
    getGoal,
    getGoalById,
    updateGoalById,
    deleteGoalById,
    getGoalByUserId
}
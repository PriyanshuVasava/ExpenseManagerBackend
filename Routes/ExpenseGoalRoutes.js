const router = require("express").Router();
const expenseGoalController = require("../Controllers/ExpenseGoalController");

router.post("/createGoal", expenseGoalController.createGoal);
router.get("/getGoal", expenseGoalController.getGoal);
router.get("/getGoalById/:id", expenseGoalController.getGoalById);
router.put("/updateGoalById/:id", expenseGoalController.updateGoalById);
router.delete("/deleteGoalById/:id", expenseGoalController.deleteGoalById);
router.get("/getGoalByUserId/:id", expenseGoalController.getGoalByUserId);

module.exports = router;
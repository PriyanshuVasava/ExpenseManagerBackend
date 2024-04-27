const router = require("express").Router();
const transactionTypeController = require("../Controllers/TransactionTypeController");

router.post('/createTransactionType', transactionTypeController.createTransactionType);
router.get("/getTransactionType", transactionTypeController.getTransactionType);
router.get('/getTransactionTypeById/:id', transactionTypeController.getTransactionTypeById);
router.put('/updateTransactionTypeById/:id', transactionTypeController.updateTransactionTypeById);
router.delete('/deleteTransactionTypeById/:id', transactionTypeController.deleteTransactionTypeById);

module.exports = router;
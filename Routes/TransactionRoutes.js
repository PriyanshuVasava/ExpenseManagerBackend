const router = require("express").Router();
const transactionController = require("../Controllers/TransactionController");

router.post('/createTransaction', transactionController.createTransaction);
router.get("/getTransaction", transactionController.getTransaction);
router.get('/getTransactionById/:id', transactionController.getTransactionById);
router.put('/updateTransactionById/:id', transactionController.updateTransactionById);
router.delete('/deleteTransactionById/:id', transactionController.deleteTransactionById);
router.post('/getTransactionByUserId', transactionController.getTransactionByUserId);
router.get('/getFilteredTransactionByUserId/:id', transactionController.getFilteredTransactionByUserId);
router.post('/updateManyTr', transactionController.updateManyTr);

module.exports = router;
const router = require("express").Router();
const payeeController = require("../Controllers/PayeeController");

router.post('/createPayee', payeeController.createPayee);
router.get("/getPayee", payeeController.getPayee);
router.get('/getPayeeById/:id', payeeController.getPayeeById);
router.put('/updatePayeeById/:id', payeeController.updatePayeeById);
router.delete('/deletePayeeById/:id', payeeController.deletePayeeById);

module.exports = router;
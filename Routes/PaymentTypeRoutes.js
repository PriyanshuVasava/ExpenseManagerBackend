const router = require("express").Router();
const paymentTypeController = require("../Controllers/PaymentTypeController");

router.post('/createPaymentType', paymentTypeController.createPaymentType);
router.get("/getPaymentType", paymentTypeController.getPaymentType);
router.get('/getPaymentTypeById/:id', paymentTypeController.getPaymentTypeById);
router.put('/updatePaymentTypeById/:id', paymentTypeController.updatePaymentTypeById);
router.delete('/deletePaymentTypeById/:id', paymentTypeController.deletePaymentTypeById);

module.exports = router;
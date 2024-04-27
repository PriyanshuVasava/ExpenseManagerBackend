const router = require("express").Router();
const accountController = require("../Controllers/AccountController");

router.post('/createAccount', accountController.createAccount);
router.get("/getAccount", accountController.getAccount);
router.get('/getAcoountById/:id', accountController.getAccountById);
router.put('/updateAccountById/:id', accountController.updateAccountById);
router.delete('/deleteAccountById/:id', accountController.deleteAccountById);

module.exports = router;
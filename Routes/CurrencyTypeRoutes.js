const router = require("express").Router();
const currencyTypeController = require("../Controllers/CurrencyTypeController");

router.post('/createCurrencyType', currencyTypeController.createCurrencyType);
router.get("/getCurrencyType", currencyTypeController.getCurrencyType);
router.get('/getCurrencyTypeById/:id', currencyTypeController.getCurrencyTypeById);
router.put('/updateCurrencyTypeById/:id', currencyTypeController.updateCurrencyTypeById);
router.delete('/deleteCurrencyTypeById/:id', currencyTypeController.deleteCurrencyTypeById);

module.exports = router;
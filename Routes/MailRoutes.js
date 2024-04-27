const router = require('express').Router();
const mailUtil = require('../Util/MailUtil');

router.post('/sendMail', mailUtil.mailHandler);

module.exports = router;
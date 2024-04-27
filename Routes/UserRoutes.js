const router = require("express").Router();
const userController = require("../Controllers/UserController");

router.post('/createUser', userController.createUser);
router.get("/getUser", userController.getUser);
router.get('/getUserById/:id', userController.getUserById);
router.put('/updateUserById/:id', userController.updateUserById);
router.delete('/deleteUserById/:id', userController.deleteUserById);
router.post('/login', userController.userLogin);
router.post('/user/isUserExist', userController.isUserExist);
router.post('/user/resetpassword', userController.resetPassword)

module.exports = router;
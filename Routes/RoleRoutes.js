const router = require("express").Router();
const roleController = require("../Controllers/RoleController");

router.post('/createRole', roleController.createRole);
router.get("/getRole", roleController.getRole);
router.get('/getRoleById/:id', roleController.getRoleById);
router.put('/updateRoleById/:id', roleController.updateRoleById);
router.delete('/deleteRoleById/:id', roleController.deleteRoleById);

module.exports = router;
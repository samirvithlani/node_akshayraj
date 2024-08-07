const router = require('express').Router();
const roleController = require('../controller/RoleController');

router.post('/role', roleController.addRole);
router.get('/roles', roleController.getAllRoles);

module.exports = router;

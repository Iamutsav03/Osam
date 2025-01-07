const express = require("express");
const { CompanyRegister ,CompanyLogin } = require("../controllers/CompanyController");
const router = express.Router();


router.post('/register',CompanyRegister);
router.post('/login',CompanyLogin);


module.exports = router;
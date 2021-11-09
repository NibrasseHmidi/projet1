const express = require("express");
const router = express.Router();




const {
  register,
  login,
  getAuthUser,
} = require("../controllers/authcontrollers");
const {
  registerRules,
  loginRules,
  validator,
} = require("../middlewares/bodyvalidator");


const isAuth = require("../middlewares/isAuth");
/******* */
/**
 * @params post /auth/register
 * @description register user
 * @access PUBLIC
 */
router.post("/register",registerRules(), validator, register);
/**
 * @param POST /auth/login
 * @description login user
 * @access PUBLIC
 */
router.post("/login", loginRules(), validator, login);
/**
 * @param get /auth/me
 * @description get auth user
 * @access PRIVATE
 */
router.get("/profil", isAuth, getAuthUser);

module.exports = router;

import express from "express";

import {login, logout, register, verifyOTP} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/verifyotp", verifyOTP);
router.post("/login", login);
router.get("/logout", logout);




export default router; 



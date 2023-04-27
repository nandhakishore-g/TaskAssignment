const express = require('express')
const router = express.Router();

const { signup, signin, forgotpassword,resetpassword } = require("../controllers/auth");

router.get("/", (req, res) => {
    return res.json({
        data: "API",
    });
});

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/forgot-password",forgotpassword);
router.post("/reset-password", resetpassword);

module.exports = router;
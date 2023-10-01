const express = require("express");
const router = express.Router();

const userInfoController = require("../controllers/UserInfoController");
const auth = require("../middleware/auth");


// router.use(express.static("public"));

// userInfoControllers.index
// router.use("/user_info", userInfoController.index);
router.get("/user_info", auth.isLogin, userInfoController.userInfoPage);
// router.get("/user_info", userInfoController.userInfoLoad);

router.post("/user_info_update", userInfoController.updateUserInfo);
router.post("/user_info/change_password", userInfoController.updatePassword);

module.exports = router;

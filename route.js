const router = require("express").Router();
const { InverterEfficiency,
    InverterEfficiencyMonthly, NormalizedEnergyDetails, GHI_GTI_Data, powerPlantTableDetails
} = require("./Controllers/controller");
const { Inverter_Smb_Yearly_Loss, Inverter_Smb_Monthly_Loss } = require("./Controllers/inverterController");

const { LoginHandler, SignupHandler, getRegisteredUsers,
    getUser, allowRegistredUser, LogoutHandler, deleteRegistredUser, verifyOtpHandler, sendOtpHandler, reSendOtpHandler, deleteExistingUser, greenEncoRegisteredUsers, deleteGreenEncoRegistredUser } = require("./Controllers/userControllers");
const { isAuth, isAdmin } = require("./utils/isAuth");
const { userRegistrationValidation, userLoginValidation } = require("./utils/user.validation");


router.route("/login").post(userLoginValidation, LoginHandler)
// router.route("/logout").get(isAuth, LogoutHandler)
router.route("/logout").post(isAuth, LogoutHandler)
router.route("/sign-up").post(userRegistrationValidation, SignupHandler)
router.route("/send-otp").post(sendOtpHandler)
router.route("/resend-otp").post(reSendOtpHandler)
router.route("/verify-otp").post(verifyOtpHandler)
// router.route("/getuser").get(isAuth,getUser)
router.route("/getuser").post(isAuth, getUser)


// Admin Routes 
// router.route("/admin/registered-users").get(isAuth,isAdmin,getRegisteredUsers)
router.route("/admin/registered-users").post(isAuth, isAdmin, getRegisteredUsers)
// router.route("/greenenco/admin/registered-users").get(isAuth,isAdmin,greenEncoRegisteredUsers)
router.route("/greenenco/admin/registered-users").post(isAuth, isAdmin, greenEncoRegisteredUsers)
router.route("/admin/allow-user").post(isAuth, isAdmin, allowRegistredUser)
// router.route("/admin/delete-user/:email_ID").delete(isAuth,isAdmin,deleteRegistredUser)
router.route("/admin/delete-user/:email_ID").delete(deleteRegistredUser)
// router.route("/admin/delete-existing-user/:email_ID").delete(isAuth,isAdmin,deleteExistingUser)
router.route("/admin/delete-existing-user/:email_ID").delete(deleteExistingUser)
// router.route("/greenenco/admin/delete-user/:email_ID").delete(isAuth,isAdmin,deleteGreenEncoRegistredUser)
router.route("/greenenco/admin/delete-user/:email_ID").delete(deleteGreenEncoRegistredUser)



// router.route("/inverter-efficiency").get(isAuth, InverterEfficiency)
// router.route("/inverter-efficiency-monthly").get(isAuth, InverterEfficiencyMonthly)
// router.route("/normalizedEnergyDetails").get(isAuth, NormalizedEnergyDetails)
// router.route("/GHI-GTI-data").get(isAuth, GHI_GTI_Data)
// router.route("/powerPlantDetails").get(isAuth, powerPlantTableDetails)
// router.route("/inverter-smb-yearly-loss").get(isAuth, Inverter_Smb_Yearly_Loss)
// router.route("/inverter-smb-monthly-loss/:inverter").get(isAuth, Inverter_Smb_Monthly_Loss)

router.route("/inverter-efficiency").post(isAuth, InverterEfficiency)
router.route("/inverter-efficiency-monthly").post(isAuth, InverterEfficiencyMonthly)
router.route("/normalizedEnergyDetails").post(isAuth, NormalizedEnergyDetails)
router.route("/GHI-GTI-data").post(isAuth, GHI_GTI_Data)
router.route("/powerPlantDetails").post(isAuth, powerPlantTableDetails)
router.route("/inverter-smb-yearly-loss").post(isAuth, Inverter_Smb_Yearly_Loss)
router.route("/inverter-smb-monthly-loss/:inverter").post(isAuth, Inverter_Smb_Monthly_Loss)



module.exports = router;
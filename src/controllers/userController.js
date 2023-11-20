import userService from "../services/userServices";

let handlelogin = async (req, res) => {
  try {
    let email = req.body.email;
    let password = req.body.password;
    // kiem tra email và password
    if (!email || !password) {
      return res.status(500).json({
        errCode: 1,
        messeage: "Missing inputs parameter!",
      });
    }
    //
    let userData = await userService.handleUserLogin(email, password);
    //

    return res.status(200).json({
      errCode: userData.errCode,
      messeage: userData.errMsg,
      user: userData.user ? userData.user : {},
    });
  } catch (error) {
    reject(error);
  }
};

module.exports = {
  handlelogin: handlelogin,
};

import db from "../models/index";
import bcrypt from "bcrypt";

// kiểm tra tài khoản login
// kiểm tra email (password)
let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let kt = await checkUserEmail(email);
      if (kt) {
        let user = await db.User.findOne({
          where: { email: email },
          // chỉ định lấy 2 thuộc tính của tài khoản
          attributes: ["email", "password", "roleid"],
          raw: true, // ket hop vs delete
        });
        if (user) {
          let checkpass = await bcrypt.compareSync(password, user.password);
          if (checkpass) {
            userData.errCode = 0;
            userData.errMsg = "Success";
            console.log(user);
            delete user.password;
            userData.user = user;
          } else {
            userData.errCode = 3;
            userData.errMsg = "Wrong password";
          }
        } else {
          userData.errCode = 2;
          userData.errMsg = "User not found";
        }
      } else {
        userData.errCode = 1;
        userData.errMsg = "Email not false";
      }
      resolve(userData);
    } catch (error) {
      reject(error);
    }
  });
};

let checkUserEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: userEmail },
      });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  handleUserLogin: handleUserLogin,
};

import bcrypt from 'bcrypt';
import db  from '../models/index';


const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
    console.log(data);
    return new Promise(async (resolve, reject) => {
        try {
            let handPasswordFromBcrypt = await handUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: handPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phonenumber: data.phonenumber,
                gender: data.gender === "1" ? true : false,
                roleId: data.roleId,
            });
            resolve('oke create new user successfully');
        } catch (error) {
            reject(error);
        }
    })
}

let handUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
     try {
        var hashPassword = await bcrypt.hashSync(password, salt);
        resolve(hashPassword);
     } catch (error) {
        reject(error);
     }
    })
};
module.exports = {
    createNewUser: createNewUser,
}
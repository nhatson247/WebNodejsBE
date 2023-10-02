import db from "../models/index";
import CRUDServices from "../services/CRUDServices";

let getHomePage = async (req,res) => {
    try {
        let data = await db.User.findAll();
       
        return res.render("homepage.ejs",{
            data: JSON.stringify(data),
        })
    } catch (e) {
        console.log(e);
    }
}

let getAboutPage =  (req,res) => {
    return res.render("aboutpage.ejs")
}

let getCrudPage =  (req,res) => {
    return res.render("crudpage.ejs");
}

// 
//asyc xu ly bat dong bo
let postCrud = async (req,res) => {
   let message = await CRUDServices.createNewUser(req.body);
    console.log(message);
}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCrudPage: getCrudPage,
    postCrud: postCrud,
}
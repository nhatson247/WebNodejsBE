
let getHomePage =  (req,res) => {
    return res.render("homepage.ejs")
}

let getAboutPage =  (req,res) => {
    return res.render("aboutpage.ejs")
}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
}
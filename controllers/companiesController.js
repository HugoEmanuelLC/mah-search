const { ObjectId } = require("mongodb");
const Companies = require("../models/ConfigCompanies")
const User = require("../models/User");

module.exports.add_companie = async (req, res) => {
    // let id = User._id
    // console.log(User._id);
    try {

        // let companieInfos = {
        //     jobTitle,
        //     website,
        //     employerContact:[{
        //         nameContact,
        //         emailContact,
        //         phone,
        //         Address
        //     }],
        //     origin,
        //     statusCompanie,
        //     comments
        // } = req.body;
    
        console.log(req.body);
    
        // const user = await User.create(companieInfos);
    
        // const token = createToken(user._id);
        // res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        // res.status(201).json({ user: user._id });
    }
    catch(err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}


module.exports.list_companies = async (req, res) => {
    const dataEmail = await res.json()
    // console.log({_id: new ObjectId(req.params.id)});
    let i = new ObjectId(dataEmail.locals.user._id)
    console.log(JSON.stringify(i));
    
    // console.log(dataEmail.locals.user._id);
    // const user = await User.findOne({email: "aaaaaaaaaaaa@gmail.com"})
    // console.log(res.json(user._id));
    res.end()
}
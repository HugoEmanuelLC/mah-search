const { ObjectId } = require("mongodb");
const Companies = require("../models/ConfigCompanies")
const User = require("../models/User");

// getId = async (req, res)=>{
//     const dataEmail = await res.json(User)
//     let i = new ObjectId(dataEmail.locals.user._id)
//     i = JSON.stringify(i)
//     console.log(i);
// }

module.exports.add_companie = async (req, res) => {
    const dataEmail = await res.json()
    console.log(dataEmail.locals);
    // let i = new ObjectId(dataEmail.locals.user._id)
    // i = JSON.stringify(i)
    // req.body.id_user = i

    // let companieInfos = {
    //         jobTitle,
    //         website,
    //         employerContact:[{
    //             nameContact,
    //             emailContact,
    //             phone,
    //             Address
    //         }],
    //         origin,
    //         statusCompanie,
    //         comments
    //     } = await req.body;

    //     const companie = await Companies.create(companieInfos)
    //     .then(resultat => {console.log(resultat)})
    //     .catch(err => {
    //         console.log(err)
    //     })
        res.status(201).end();
}


module.exports.list_companies = async (req, res) => {
    // const dataEmail = await res.json()
    // let i = new ObjectId(dataEmail.locals.user._id)
    // i = JSON.stringify(i)
    // console.log(i);
    res.end()
}
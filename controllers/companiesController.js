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
    let i = res.locals.user._id
    // const obj = new ObjectId()
    // const idString = obj.toHexString(i)
    // console.log(idString);

    let companieInfos = {
            jobTitle,
            website,
            employerContact:[{
                nameContact,
                emailContact,
                phone,
                Address
            }],
            origin,
            statusCompanie,
            comments
        } = req.body;

        companieInfos.id_user = i

        console.log(companieInfos);

        const companie = await Companies.create(companieInfos)
        .then(resultat => {console.log(resultat)})
        .catch(err => {
            console.log(err)
        })
        res.status(201).json({test: "companie._id"})
        res.end();
}


module.exports.list_companies = async (req, res) => {
    // const dataEmail = await res.json()
    // let i = new ObjectId(dataEmail.locals.user._id)
    // i = JSON.stringify(i)
    // console.log(i);
    res.end()
}
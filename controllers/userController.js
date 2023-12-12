
const User = require('../models/User');

module.exports.userProfile = (req, res) => {
    console.log(res.locals.user);
    const user = res.locals.user;

    res.status(200).json(user)
}

module.exports.updateUserProfile = async (req, res, next) => {
    // console.log(req.params.id);
    console.log(res.locals.user._id);
    try {
        let userInfos = {
            firstname,
            lastname,
            email,
            password,
            linkedin,
            github,
            profilpicture,
            cv,
        } = req.body;

        console.log(userInfos);

        const user = await User.updateOne(userInfos);
        console.log(user);
        res.status(200).json(user);
        next();
    } catch (err) {
        console.log(err);
    }
}

module.exports.deleteUserProfile = (req, res) => {

}
const User = require('../models/User');
const Job = require('../models/ConfigJobs');
const bcrypt = require('bcrypt');

module.exports.userProfile = (req, res) => {
    console.log(res.locals.user);
    const user = res.locals.user;

    res.status(200).json(user)
}

module.exports.updateUserProfile = async (req, res, next) => {
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

        // console.log(userInfos.password.length);

        userInfos.password.length >= 6 ? 
        userInfos.password = await bcrypt.hash(userInfos.password, 10) : 
        userInfos.password = await User.findById(res.locals.user._id).password;

        const user = await User.findByIdAndUpdate(res.locals.user._id, userInfos);
        res.status(200).json(user);
        // next();

    } catch (err) {
        console.log(err);
    }
}

module.exports.deleteUserProfile = async (req, res) => {
    try {
        const { id } = req.params;

        // if (Job !== null) {
        //     // Delete the jobs associated with the user
        //     console.log("start if");
        //     await Job.deleteMany({ id_user: id });
        //     console.log("middle if");
        //     res.status(200).json({ message: 'Jobs deleted successfully' });
        //     console.log("end if");

        // } else {
        //     console.log("start else");

        //     res.status(404).json({ message: 'Jobs not found' });

        //     console.log("end else");
        // }

        // Delete the jobs associated with the user
        const jobsDeleted = await Job.deleteMany({ id_user: id });

        // Delete the user
        const user = await User.findByIdAndDelete(id);

        if (!user && jobsDeleted.deletedCount === 0) {
            return res.status(404).json({ message: 'User and jobs not found' });
        }

        if (!user) {
            return res.status(404).json({ message: 'User not found, but jobs deleted successfully' });
        }

        if (jobsDeleted.deletedCount === 0) {
            return res.status(404).json({ message: 'Jobs not found, but user deleted successfully' });
        }

        return res.status(200).json({ message: 'User and associated jobs deleted successfully' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}
const User = require("../model/user");

exports.getUser = (req, res, next) => {
    const user = {"id": "1"};
    res.status(200).json({
        message: "User fetched successfully!",
        users: user
    });
}
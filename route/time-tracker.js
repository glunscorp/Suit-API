const express = require("express");

const UserController = require("../controller/user-controller");

const router = express.Router();

router.get("",
    function (req, res) {
                res.send('Suit API');
            }
);

router.get("/getUser", UserController.getUser);

module.exports = router;

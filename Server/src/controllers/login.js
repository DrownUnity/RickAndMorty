const users = require("../utils/user")

const login = (req, res) => {

    const {email, password} = req.query;

    const matchedUser = users.find(
        (user) => user.password === password && user.email === email
      );

    if(matchedUser){
        res
            .status(200)
            .json({"access": true})
    } else {
        res
            .status(200)
            .json({"access": false})
    }

}

module.exports = login;
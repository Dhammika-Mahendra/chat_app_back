const User = require("../Models/user.model.js");

const loginUser = (req, res) => {
    res.send("Login Page");
};

const signupUser = async (req, res) => {

   try{
    const {fullName, userName, password, confirmPassword, gender } = req.body;
    if(password !== confirmPassword) {
        return res.status (400).json({error: "Passwords don't match"})
    }

    const user = await User.findOne({userName});
    if(user) {
        return res.status(400).json({error: "Username already exists"})
    }

    const newUser = new User({
        fullName,
        userName,
        password,
        gender
    });

    await newUser.save();
    res.status(201).json({message: "User created successfully"});
   }catch(error){
     res.status(500).json({ error: error.message });
   }

};

const logoutUser = (req, res) => {
    res.send("Logout Page");
};

module.exports = { loginUser, signupUser, logoutUser };
const User = require("../Models/user.model.js");
const { generateTokenAndSetCookie } = require("../Utils/generateJWT.js");


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
    
    if(newUser){
        generateTokenAndSetCookie(newUser._id, res);
        await newUser.save();
    }
    
    res.status(201).json({message: "User created successfully"});
    
  }catch(error){
        res.status(500).json({ error: error.message });
  }

};

const loginUser = async (req, res) => {
    
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    let isPasswordCorrect = password === user.password;
    if (!user || !isPasswordCorrect) {
        return res.status (400).json({ error: "Invalid username or password" });
    }
    generateTokenAndSetCookie(user._id, res);

    res.status (200).json({
        _id: user._id,
        fullName: user.fullName,
        userName: user.userName
    });

  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const logoutUser = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { loginUser, signupUser, logoutUser };
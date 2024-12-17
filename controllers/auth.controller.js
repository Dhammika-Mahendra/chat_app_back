const loginUser = (req, res) => {
    res.send("Login Page");
};

const signupUser = (req, res) => {
    res.send("Signup Page");
};

const logoutUser = (req, res) => {
    res.send("Logout Page");
};

module.exports = { loginUser, signupUser, logoutUser };
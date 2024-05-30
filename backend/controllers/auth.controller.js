export const signUp = (req,res) => {
    try {
        const {fullName, username , password, confirmpassword} = req.body;
    } catch (error) {
        
    }
}

export const login = (req,res) => {
    res.send("Login Page")
}

export const logout = (req,res) => {
    res.send("Logout Page")
}

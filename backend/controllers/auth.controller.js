import bcrypt from 'bcryptjs';
import User from "../models/user.model.js";
import generateTokenAndSetCookie from '../utils/generateToken.js';

export const signUp = async (req,res) => {
    try {
        const {fullName, username , password, confirmPassword, gender} = req.body;

        if(password !== confirmPassword) {
            return res.status(400).json({
                error: "Passwords do not match"
            })
        }

        const user = await User.findOne({username}); //this will check if user with username exists in db or not

        if(user) {
            return res.status(400).json({
                error: "User already exists"
            })
        }

        //Hash the password here 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt); 
        //https://avatar-placeholder.iran.liara.run/ => for avatars
        
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender, 
            profilePic: gender === 'male' ? boyProfilePic : girlProfilePic
        })

        if(newUser){
            //Generate JWT Token here 
            generateTokenAndSetCookie(newUser._id , res);

            await newUser.save();

        res.status(201).json({
            _id : newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            gender: newUser.gender,
            profilePic: newUser.profilePic
        })
        }else{
            res.status(500).json({error:"Invalid user data"});
        }

    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({error:"Internal server error"}); 
    }
}

export const login = (req,res) => {
    res.send("Login Page")
}

export const logout = (req,res) => {
    res.send("Logout Page")
}

import User from "../models/user.model.js";

export const getUsersForSidebar = async (req,res) => {
    try {
        const loggedInUserId = req.user._id; //we can get this from protectRoute middleware.

        const filtereUsers = await User.find({ _id : { $ne : loggedInUserId } }).select("-password") ;
        // this gets all users id which are not equal to loggeinuser. 
        res.status(200).json(filtereUsers);

    } catch (error) {
        console.log("Error in getUsersForSidebar" + error.message )
        res.status(500).json({error: "Internal server error "});
    }
}
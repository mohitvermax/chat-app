import Conversation from "../models/conversation.model.js ";
import Message from "../models/message.model.js";

export const sendMessage = async (req,res) => {
    try {
        const {message} = req.body;
        const {id: recieverId} = req.params;
        const senderId  = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId,recieverId]}
        });

        if(!conversation) {
            // create the conversation 
            conversation = await Conversation.create({
                participants: [senderId,recieverId]
                // messages  is by default empty array
            });
        }

        const newMessage = new Message({
            senderId: senderId,
            recieverId: recieverId,
            message:message,
        })

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        // SOCKET IO functionality will be added here 




        // Save it into the databse
        // await conversation.save();
        // await newMessage.save();

        // this will run in parallel so faster
        await Promise.all([conversation.save(), newMessage.save()]);

        res.status(201).json(newMessage);
    } catch (error) {
        console.log("Error in send message controller", error.sendMessage )
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}
import { useAuthContext } from "../../context/AuthContext"
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation} =useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt)

  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const chatBgColor = fromMe ? "bg-blue-500" : ""

  return (
    <div className={`chat ${chatClassName}`}>
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src={profilePic } />
    </div>
  </div>
  
  <div className={`chat-bubble text-white ${chatBgColor}`}>{message.message}</div>
  <div className="chat-footer opacity-50">
  <time className="text-xs opacity-50 pb-2">{formattedTime}</time>
  </div>
</div>
  )
}

export default Message
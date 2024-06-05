import { create } from 'zustand'

// this will be the global state
const useConversation = create((set) => ({
  selectedConversation : null,
  setSelectedConversation : (selectedConversation) => set({selectedConversation}),
  messages: [],
  setMessages: (messages) => set({messages}),
  
}))

export default useConversation

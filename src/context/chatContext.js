import React, {useState, useContext, useEffect, createContext} from "react";

const ChatContext = createContext()

export const ChatProvider = ({children})=>{
    const [mode, setMode] = useState("dark")
    const [user, setUser] = useState(null)
    const [isAuth, setIsAuth] = useState(false)
    const [userRole, setUserRole] = useState({boo: true, value: ""})
    const [persistData, setPersistData] = useState({mode: 'light', user: null, isAuth: false, chat: null,})


    return <ChatContext.Provider 
            value={{mode, setMode, user, setUser, isAuth, setIsAuth, persistData, setPersistData, userRole, setUserRole}}
            >
            {children}
        </ChatContext.Provider>
} 

export const ChatState = ()=>{
    return useContext(ChatContext)
}

export default ChatProvider
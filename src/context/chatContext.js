import React, {useState, useContext, useEffect, createContext} from "react";

const ChatContext = createContext()

export const ChatProvider = ({children})=>{
    const [mode, setMode] = useState("dark")
    const [user, setUser] = useState(null)
    const [isAuth, setIsAuth] = useState(false)
    const [userRole, setUserRole] = useState({boo: true, value: ""})
    const [persistData, setPersistData] = useState({mode: 'light', user: null, isAuth: false, chat: null,})
    const [menu, setMenu] = useState(false)


    return <ChatContext.Provider 
            value={{mode, setMode, user, setUser, isAuth, setIsAuth, persistData, setPersistData, userRole, setUserRole, menu, setMenu}}
            >
            {children}
        </ChatContext.Provider>
} 

export const ChatState = ()=>{
    return useContext(ChatContext)
}

export default ChatProvider
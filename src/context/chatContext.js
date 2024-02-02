import React, {useState, useContext, useEffect, createContext} from "react";

const ChatContext = createContext()

export const ChatProvider = ({children})=>{
    const [mode, setMode] = useState("dark")
    const [user, setUser] = useState(null)
    const [isAuth, setIsAuth] = useState(false)
    const [userRole, setUserRole] = useState({boo: true, value: ""})
    const [persistData, setPersistData] = useState({mode: 'light', user: null, isAuth: false, chat: null,})
    const [menu, setMenu] = useState(false)
    const [status, setStatus] = useState("pending")
    const [alertMsg, setAlertMsg]= useState("Field cannot be empty")
    const [openAlert, setOpenAlert] = useState(false)
    const [alertSeverity, setAlertSeverity] = useState('warning')
    const [showHis, setShowHis] = useState(false)
    const [maintData, setMaintData] = useState()

    useEffect(() => {
    const fetched_status = localStorage.getItem('status')
    setStatus(fetched_status)
    }, [])


    return <ChatContext.Provider 
            value={{mode, setMode, user, setUser, isAuth, setIsAuth, persistData, setPersistData, userRole, setUserRole, menu, setMenu, status, setStatus, alertMsg, setAlertMsg, openAlert, setOpenAlert, alertSeverity, setAlertSeverity, showHis, setShowHis, maintData, setMaintData }}
            >
            {children}
        </ChatContext.Provider>
} 

export const ChatState = ()=>{
    return useContext(ChatContext)
}

export default ChatProvider
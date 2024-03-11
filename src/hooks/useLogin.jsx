import { useEffect, useState } from "react"
import { getUsername } from "../services/auth.service"

export const useLogin = () => {
    const [username, setUsername] = useState(null)
    useEffect(() => {
        const token = localStorage.getItem("token")
        if(token){
            setUsername(getUsername(token))
        }else{
            window.location.href = "/login"
        }
    }, [])
    
    return username
}

import { createContext, useState } from "react"

const API = import.meta.env.VITE_API_URL;
export const AuthContext = createContext(null)

export function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(()=>
        localStorage.getItem("token"))

        async function login(email, password) {
            const response = await fetch (`${API}/user/login`,{
                method:"POST",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify({ email, password })
                })
                if(!response.ok) throw new Error("Wrong mail and password")

                const {token} = await response.json()
                localStorage.setItem("token", token)

                await loadProfile(token)
            }
        
            async function loadProfile(token) {
                const response = await fetch (`${API}/user/login/profile`,{
                method:"POST",
                headers:{Authorization: `Bearer ${token}`},
                })
                if (!response.ok) return logout()
                const { user } = await response.json()
            setUser(user)
            }

            function logout() {
                localStorage.removeItem("token")
                setToken(null)
                setUser(null)
            }

            const value = { user, token, login, logout, loadProfile }

            return (
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
            )
        }


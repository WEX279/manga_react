import { createContext, useState } from "react"
const API = import.meta.env.VITE_API_URL;

const AuthContext = createContext(null)

function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(()=>
        localStorage.getItem("token"))

        async function register(email, password, confirmPassword) {
            const response = await fetch (`${API}/user/register`,{
                method:"POST",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify({ email, password, confirmPassword })
                })

                if(!response.ok) throw new Error("Check credentials!")

                const data = await response.json()
                localStorage.setItem("token", data.token)
                setToken(data.token)

                await loadProfile(data.token)
            }
            
        
        async function login(email, password) {
            const response = await fetch (`${API}/user/login`,{
                method:"POST",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify({ email, password })
                })

                if(!response.ok) throw new Error("Wrong mail or password")

                const data = await response.json()
                localStorage.setItem("token", data.token)
                setToken(data.token)

                await loadProfile(data.token)
            }
        
            async function loadProfile(token) {
                if (!token)return;
                const response = await fetch (`${API}/user/profile`,{
                    method:"GET",
                    headers:{Authorization: `Bearer ${token}`},
                })
                
                if (!response.ok) return logout()
                const data = await response.json()
                setUser(data.user)
            }

            function logout() {
                localStorage.removeItem("token")
                setToken(null)
                setUser(null)
            }

            const value = { user, token, register, login, logout, loadProfile }

            return (
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
            )
        }

export{
    AuthProvider,
    AuthContext
}

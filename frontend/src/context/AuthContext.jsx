import { createContext, useContext, useEffect, useState } from "react"
import { logoutRequest, profileRequest } from "../api/auth"

//1. Crear el contexto 

const AuthContext = createContext()

//2. Hook para consumir el contexto facilmente
export const useAuth = () => useContext(AuthContext)

//3. Crear el proveedor del contexto

export const AuthProvider = ({children}) => {

  //Lógica de código
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  //Verificar si al cargar la aplicación hay una sesión de usuario activa
  useEffect(() => {
    
    const checkLogin = async () => {
      try {
        const res = await profileRequest()
        setUser(res.data)
      } catch (error) {
        console.log("Error:", error)
        setUser(null)
      } finally {
        setLoading(false)
      }
    }
  
    checkLogin()
  
  }, [])

  //Función para cerrar sesión globalmente
  const logout = async () => {
    await logoutRequest()
    setUser(null)
  }
  

  return (
    <AuthContext.Provider value={{user, setUser, logout, loading}}>
      {children}
    </AuthContext.Provider>
  )

}

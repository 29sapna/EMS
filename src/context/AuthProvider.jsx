import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    // localStorage.clear()

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        setLocalStorage()
        const {employees} = getLocalStorage()
        setUserData(employees)
    }, [])
    
    

    return (
        <div>
            <AuthContext.Provider value={[userData,setUserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default AuthProvider
import { useState, useEffect, useContext, createContext } from "react";
import { ACCESS_TOKEN } from "../constants";
// make a auth context
const AuthContext = createContext();

// make a auth provider
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            console.log("user is logged in");
            setUser(true);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );

}

// use auth context
export const useAuth = () => {
    return useContext(AuthContext);
}
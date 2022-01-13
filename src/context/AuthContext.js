import { useState, useEffect, createContext, useContext } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'




const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);



const AuthState = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    
    const autoSignIn = async () => {
      try {
        setLoading(true);
        const {
          data,
        } = await axios.get(
          "https://aidooit-app.herokuapp.com/user/me", {
            headers: { Authorization: token }
          }
        );
        setUser(data);
        setIsAuthenticated(true);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    token && autoSignIn()
  }, [token])



 //function for signup
  const signup = async (formData) => {
    setLoading(true);
    try {
      const {
        data: { token },
      } = await axios.post(
        "https://aidooit-app.herokuapp.com/user/singup",
        formData
      );
      const {
        data,
      } = await axios.get(
        "https://aidooit-app.herokuapp.com/user/me", {
          headers: { Authorization: token }
        }
      );
      setUser(data);
      localStorage.setItem("token", token);
      setIsAuthenticated(true);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };



  //function for signin
  const signin = async (formData) => {
    try {
      const {
        data: { token },
      } = await axios.post(
        "https://aidooit-app.herokuapp.com/user/singin",
        formData
      );
      const {
        data,
      } = await axios.get(
        "https://aidooit-app.herokuapp.com/user/me", {
          headers: { Authorization: token }
        }
      );
      setUser(data);
      localStorage.setItem("token", token);
      setIsAuthenticated(true);
    } catch (error) {
      toast.error(error.response?.data.error||error.message );
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signup, signin, loading, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;

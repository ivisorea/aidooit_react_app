import { useState, useEffect, createContext, useContext } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);



const AuthState = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
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
        toast.error(error.response?.data.error || error.message);
        localStorage.removeItem('token');
        console.error(error);
        setLoading(false);
      }
    }
    token && autoSignIn()
  }, [token])



 //function for signup
  const signup = async (formData) => {
    try {
      setLoading(true);
      const {
        data: { token },
      } = await axios.post(
        "https://aidooit-app.herokuapp.com/user/signup", formData);
      const {
        data,
      } = await axios.get(
        "https://aidooit-app.herokuapp.com/user/me", {
          headers: { Authorization: token }
        }
      );
      localStorage.setItem("token", token);
      setToken(token);
      setUser(data);
      //setIsAuthenticated(true);
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
        "https://aidooit-app.herokuapp.com/user/signin",
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
      setToken(token);
      //setIsAuthenticated(true);
    } catch (error) {
      toast.error(error.response?.data.error||error.message );
    }
  };

  const signout  = () => {
    setIsAuthenticated(false)
    setUser(null)
    setToken(null);
    localStorage.removeItem('token')
  }

  const updateUser = async (dataToUpdate) => {
    try {
      const {data: userData} = await axios.put(
        `https://aidooit-app.herokuapp.com/user/${user._id}`,
        { ...user, ...dataToUpdate },
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      );
      setUser(userData);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const images_upload_handler = async (blobInfo, success, failure, progress) => {
    const formData = new FormData();
    formData.append('file', blobInfo.blob(), blobInfo.filename());
    try {
      const {
        data: { location }
      } = await axios.post('https://aidooit-app.herokuapp.com/images/s3', formData, {
        headers: { Authorization: localStorage.getItem('token') },
        onUploadProgress: ({ loaded, total }) => progress((loaded / total) * 100)
      });
      console.log(location);
      success(location);
    } catch (error) {
      console.log(error);
      failure(error);
    }
  };


  return (
    <AuthContext.Provider value={{images_upload_handler, isAuthenticated, signup, updateUser, signin, signout, loading, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;

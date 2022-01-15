import { useState, createContext, useContext } from "react";
import axios from 'axios'
// import {toast} from 'react-toastify'

const ApiContext = createContext();
export const useApi = () => useContext(ApiContext);

const ApiState = ({ children }) => {
    // const [loading, setLoading] = useState(false);
    

 //function for upload image to server
 const imagesUploadHandler = async (blobInfo, success, failure, progress) => {
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
    <ApiContext.Provider value={{ imagesUploadHandler }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiState;
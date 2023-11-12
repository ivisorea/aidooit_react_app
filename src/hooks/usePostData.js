//Custom Hook to get Post Data
import { useState, useEffect } from 'react'
import axios from 'axios';

export function usePostData() {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      const getPosts = async () => {
        try {
          const response = await axios.get('https://aidooit-app.herokuapp.com/post');
          console.log(response.data);
          setPosts(response.data);
        }
        catch (error) {
          console.log(error);
        }
      };
      getPosts();
    }, []);
       
    return { posts };
  }
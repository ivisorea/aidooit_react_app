import { useState, useEffect} from "react";
import axios from "axios";

export function usePostByCategory (categoryId) {
    
    const [postsByCategory, setPostsByCategory] = useState([]);
    const [loading, setLoading] = useState(false);
    
    //GET POSTS BY CATEGORY
    useEffect(() => {
        console.log('CategoryId: ', categoryId);
      setLoading(true);
      try {
          const getPostsByCategory = async () => {
              const response = await axios.get(`https://aidooit-app.herokuapp.com/post/category/${categoryId}`);
              setPostsByCategory(response.data);
          };
          getPostsByCategory();
          setLoading(false);
      }
      catch (error) {
          console.log(error);
      }
  }, [categoryId]);
  
  return { loading, postsByCategory }
}

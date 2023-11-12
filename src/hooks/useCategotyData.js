//Custom Hook to get Category Data
import { useState, useEffect } from "react";
import axios from "axios";

export  function useCategoryData() {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      setIsLoading(true);
      const getCategories = async () => {
        const response = await axios.get('https://aidooit-app.herokuapp.com/categories');
        setCategories(response.data);
        console.log(response.data);
        setIsLoading(false);
      };
      getCategories();
    }, []);
      return {categories, isLoading};
  }
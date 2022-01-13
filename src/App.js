import { useState, useEffect } from 'react';
import {Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { GlobalStyles } from './GlobalStyles';
import { Layout } from './components/Layout';
import { ProtectedRoute } from './components/ProtectedRoute';
import { NotFound } from './components/NotFound';
import { Login } from './components/Login';
import { Register } from './components/Register';


import './App.css';
import Home from './components/Home';
import { UserProfile } from './components/UserProfile';
import { CreatePost } from './components/CreatePost';
import { HomeListPostByCateg } from './components/HomeListPostByCateg';
import { Post } from './components/Post';

//Custom Hook to get Category Data
function useCategoryData() {
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

//Custom Hook to get Post Data
function usePostData() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get('https://aidooit-app.herokuapp.com/posts');
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




function App() {
  

  const { categories, isLoading} = useCategoryData();
  const { posts } = usePostData();
  
 
  return (
    <>
    <GlobalStyles/>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home 
                        categories={categories} 
                        posts={posts}
                        isLoading={isLoading}
                        />} />
          <Route path='/category/:CategoryId' element={<HomeListPostByCateg />} />
          <Route path='/detail/:PostId' element={<Post />} />
          <Route path='login' element={<Login />} />
          <Route path='singup' element={<Register />} />
          <Route path='create-post' element={<CreatePost />} />
          <Route path='protected' 
            // element={<ProtectedRoute />}
            >
            <Route index element={<UserProfile/>} />
            <Route path='create-post' element={<CreatePost />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
      
    
    </>
    
  );
}

export default App;

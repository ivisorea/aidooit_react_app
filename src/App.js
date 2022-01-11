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
import PostList from './components/PostList';
import Home from './components/Home';
import { UserProfile } from './components/UserProfile';
import { CreatePost } from './components/CreatePost';

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

//Custom Hook to get Post Data By Category
function usePostData() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getPosts = async () => {
      const response = await axios.get(`https://aidooit-app.herokuapp.com/post`);
      console.log(response.data);
      setPosts(response.data);
      setLoading(false);
    };
    getPosts();
  }, []);

  return {posts, loading};
}

function App() {
  const {categories, isLoading} = useCategoryData();
  const {posts, loading} = usePostData();

  return (
    <>
    <GlobalStyles/>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home 
                        categories={categories} 
                        posts={posts}
                        isLoading={isLoading}
                        loading={loading}
                        />} />
          <Route path='/category/' element={<PostList posts={posts}/>} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='protected' element={<ProtectedRoute />}>
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

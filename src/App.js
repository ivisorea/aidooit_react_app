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
      const response = await axios.get(`https://aidooit-app.herokuapp.com/post`);
      console.log(response.data);
      setPosts(response.data);
    };
    getPosts();
  }, []);

  return { posts };
}

//Custom Hook to Get Post Data By Category
function usePostDataByCategory(category) {
  const [postsByCategory, setPostsByCategory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    
    const getPostsByCategory = async () => {
      const response = await axios.get(`https://aidooit-app.herokuapp.com/post/category/${this.props.match.params.id}`);
      console.log(response.data);
      setPostsByCategory(response.data);
      setLoading(false);
    };
    getPostsByCategory();
  }, []);

  return {postsByCategory, loading};
}


function App() {
  const { categories, isLoading} = useCategoryData();
  const { posts } = usePostData();
  const { postsByCategory, loading} = usePostDataByCategory();

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
                        postsByCategory={postsByCategory}
                        />} />
          <Route path='/category/:id' element={<HomeListPostByCateg 
                        postsByCategory={postsByCategory}
                        loading={loading}
                        />} />
          <Route path='login' element={<Login />} />
          <Route path='singup' element={<Register />} />
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

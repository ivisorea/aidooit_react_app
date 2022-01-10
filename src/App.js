import { useState, useEffect } from 'react';
import {Routes, Route, useParams} from 'react-router-dom';
import axios from 'axios';
import Layout from './components/Layout/Layout';
import { ProtectedRoute } from './components/ProtectedRoute';
import { NotFound } from './components/NotFound';
import { Login } from './components/Login';
import { Register } from './components/Register';


import './App.css';
import PostList from './components/PostList/PostList';
import Home from './components/Home';

function App() {
  const { idCategory} = useParams();
  const [categories, setCategories] = useState([]);
  const [postsByCategory, setPostsByCategory] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get('https://aidooit-app.herokuapp.com/categories');
      setCategories(response.data);
      console.log(response.data);
    };
    getCategories();
  }, []);

  useEffect(() => {
    const getPostsByCategory = async () => {
      const response = await axios.get(`https://aidooit-app.herokuapp.com/post/category/${idCategory}`);
      console.log(response.data);
      setPostsByCategory(response.data);
    };
    getPostsByCategory();
  }, [idCategory]);


  return (
    <>

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home categories={categories}/>} />
          <Route path='/category/' element={<PostList postsByCategory={postsByCategory}/>} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='protected' element={<ProtectedRoute />}>
            {/* <Route index element={<UserProfile />} />
            <Route path='create-post' element={<CreatePost />} /> */}
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
      
    
    </>
    
  );
}

export default App;

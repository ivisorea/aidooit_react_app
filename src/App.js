import { GlobalStyles } from './GlobalStyles';
import { Layout } from './components/Layout';
import { NotFound } from './components/NotFound';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthState from "./context/AuthContext";
import {ToastContainer} from 'react-toastify'
import Home from './pages/Home';
import { UserProfile } from './components/UserProfile';
import { CreatePost } from './pages/CreatePost';
import { HomeListPostByCateg } from './components/HomeListPostByCateg';
import { Post } from './components/Post';
import { EditPost } from './pages/EditPost';
import 'react-toastify/dist/ReactToastify.css'
import './App.css';


function App() {
  
  return (
    <>
      <GlobalStyles/>
      <ToastContainer/>
      <AuthState>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>} />
            <Route path='/category/:CategoryId' element={<HomeListPostByCateg />} />
            <Route path='/detail/:PostId' element={<Post />} />   
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="protected" element={<ProtectedRoute />}>
              <Route index element={<UserProfile/>} />
              <Route path='create-post' element={<CreatePost />} />
              <Route path='edit-post/:id' element={<EditPost />} />
            </Route>
          <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AuthState>
    </>
  );
}


export default App;

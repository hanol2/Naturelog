import {Routes, Route, Navigate, Link} from 'react-router-dom'
import PostDetail from '../pages/posts'
import Home from '../pages/home'
import PostList from '../pages/posts'
import PostNew from '../pages/posts/new'
import PostEdit from '../pages/posts/edit'
import Profile from '../pages/profile'
import SignupPage from '../pages/signup'
import LoginPage from '../pages/login'

export default function Router(){
    return (
        <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/posts" element={<PostList/>}/>
      <Route path="/posts/:id" element={<PostDetail/>}/>
      <Route path="/posts/new" element={<PostNew/>}/>
      <Route path="/posts/edit/:id" element={<PostEdit/>}/>
      <Route path="/posts/profile" element={<Profile/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="*" element={<Navigate replace to="/"/>}/>
    </Routes>
        </>     
    )    
}

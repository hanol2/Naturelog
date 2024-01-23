import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/home";
import PostList from "../Pages/posts";
import PostDetail from "../Pages/posts/detail";
import PostEdit from "../Pages/posts/edit";
import PostNew from "../Pages/posts/new";
import LoginPage from "../Pages/login";
import SignupPage from "../Pages/signup";
import ProfilePage from "../Pages/profile";

interface RouterProps {
  isAuthenticated: boolean;
}

export default function Router({ isAuthenticated }: RouterProps) {
  return (
    <Routes>
      {isAuthenticated ? (
        <>
          <Route path="/" element={<Home />}></Route>
          <Route path="/posts" element={<PostList />}></Route>
          <Route path="/posts/:id" element={<PostDetail />}></Route>
          <Route path="/posts/new" element={<PostNew />}></Route>
          <Route path="/posts/edit/:id" element={<PostEdit />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="*" element={<Navigate replace to="/" />}></Route>
        </>
      ) : (
        <>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route path="*" element={<LoginPage />}></Route>
        </>
      )}
    </Routes>
  );
}

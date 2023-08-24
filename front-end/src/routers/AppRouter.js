import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "../components/Header";
import NotFoundPage from "../components/NotFoundPage";
import HelpPage from "../components/HelpPage";
import HomePage from '../components/HomePage';
import Login from "../components/user/Login";
import SignUp from "../components/user/Signup"

const AppRouter = () => (
    <Router> 
    <Header />
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="help" element={<HelpPage />} />
      <Route path="*" element={<NotFoundPage />} />
  
     </Routes>    
     </Router>
);

export default AppRouter;


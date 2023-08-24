import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
    <header>
      <h1>Task Manager </h1>
      <NavLink to="/"      
       className={({isActive}) => isActive ? "active-class": "non-active-class" } >
       Home Page
       </NavLink> 
       <br />
      <NavLink to="/signup" 
      className={({isActive}) => isActive ? "active-class": "non-active-class" } >
      Create Account
      </NavLink>
      <br />
      <NavLink to="/login" 
      className={({isActive}) => isActive ? "active-class": "non-active-class" } >
      Login Account
      </NavLink>
      <br />
      <NavLink to="/edit"   
      className={({isActive}) => isActive ? "active-class": "non-active-class" } >
      Edit Task
      </NavLink>
      <br />
      <NavLink to="/help"  
       className={({isActive}) => isActive ? "active-class": "non-active-class" } >
       Help 
       </NavLink>
       <br />
    </header>
);

export default Header;

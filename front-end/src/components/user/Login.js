import React, {useEffect,useState} from "react";
import LoginForm from "./LoginForm";
import axios from "axios";

const Login = () => {
     const token = localStorage.getItem('authToken');
     const [loggedIn, setLoggedIn] = useState(false);
     useEffect(() => {
       
        if(token) {
            async function fetch() {
                try {
                const resp = await axios.get('http://localhost:5000/users/isLogged',{
                        headers:{
                           Authorization: `Bearer ${token}`,
                        }
                     })
                  resp.data.token ? setLoggedIn(true) : setLoggedIn(true);  
                } catch(err) {
                   console.log(err);
                }
            }
            fetch();
        }
     })
    if(loggedIn) {
        return (
            <div>
                <h1>Welcome to Login Page</h1>
                <LoginForm />
            </div>
        )
    }
    else {
        window.location.href = '/'
    }
    
}

export default Login;
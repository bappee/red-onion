import React from 'react';
import Auth from './useAuth';

const Login = () => {
   const auth= Auth();
   console.log(auth) 
    return (
        <div>
            <h1>This is login</h1>
            { auth.user ? <button className="text-center bg-danger text-light d-flex justify-content-center" onClick={auth.signOut}>Sign Out</button> :
                <button className="text-center bg-danger text-light" onClick={auth.signInWithGoogle} >Sign In</button>
                }
        </div>
    );
};

export default Login;
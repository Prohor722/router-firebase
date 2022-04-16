import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase({});
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={signInWithGoogle}>Google Sign In</button>
            <br/>
                <input type="email" placeholder='enter your email'/>
                <br />
                <input type="password" placeholder='enter your password'/>
                <br />
                <input type="submit" value="Login" />
        </div>
    );
};

export default Login;
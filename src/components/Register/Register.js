import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Please Register now</h3>

            <form>
                <input type="text" placeholder='enter your name'/>
                <br />
                <input type="email" placeholder='enter your email'/>
                <br />
                <input type="password" placeholder='enter your password'/>
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;
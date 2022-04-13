import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();

    const navigeteLogin = () => {
        navigate('/login');
    }
    const handleRegister = event => {
        event.preventDefault();
    }
    return (
        <div className='register-form'>
            <h2 className='text-center'> Plase Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id='' placeholder='Your Name' />
                <input type="email" name='email' id="" placeholder='Email Address' required />
                <input type="password" name='password' id="Password" required />
                <input type="submit" value="Register" />
            </form>
            <p> Already have an account? <Link to="/login " className='text-danger text-decoration-none' onClick={navigeteLogin}> Plase Login</Link></p>

        </div>
    );
};

export default Register;
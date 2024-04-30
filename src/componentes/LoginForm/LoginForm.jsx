import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder='Nombre de Usuario' required />
                <FaUser className='icon' />
            </div>
            <div className="input-box">
                <input type="password" placeholder='Contraseña' required />
                <FaLock className='icon' />
            </div>
            <div className="remember-forgot">
                <label><input type="checkbox"/>Mostrar contraseña</label>
                <a href="#">Has olcidad tu contraseña?</a>
            </div>
            <button type='submit'>Acceder</button>
            <div className="register-link">
                <p>No tiene una cuenta?<a href="#">Registrarse</a></p>
            </div>
        </form>
    </div>
  );
};

export default LoginForm

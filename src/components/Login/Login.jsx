import { useState } from 'react';
import './login.css'
import LoginForm from '../LoginForm/LoginForm';
import { useAuth } from "../authContext/authContext";
import { useNavigate } from 'react-router-dom';
const Login = () => {
    
    const authentication = useAuth()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const error = authentication.err
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async (e) => {

        e.preventDefault();
        await authentication.login(email, password)
        

    };

    return (

        <section className='back'>

            <div className='containerDiv'>
                <div className="login-form">
                    <h2>Iniciar sesión</h2>
                    <LoginForm handleEmailChange={handleEmailChange} handleLogin={handleLogin} handlePasswordChange={handlePasswordChange} email={email} password={password} error={error} />
                </div>

            </div>
        </section>

    )
}

export default Login

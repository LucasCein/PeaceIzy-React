import { useState } from 'react';
import './login.css'
import LoginForm from '../LoginForm/LoginForm';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Aquí puedes implementar la lógica para iniciar sesión
        console.log('Iniciar sesión con:', email, password);
    };

    return (
        <section className='back'>

            <div className='containerDiv'>
                <div className="login-form">
                    <h2>Iniciar sesión</h2>
                    <LoginForm handleEmailChange={handleEmailChange} handleLogin={handleLogin} handlePasswordChange={handlePasswordChange} email={email} password={password} />
                </div>

            </div>
        </section>
    )
}

export default Login

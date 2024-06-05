import { useState } from "react";
import RegisterForm from "../RegisterForm/RegisterForm";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../authContext/authContext";

const Register = () => {
    const authentication = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        await authentication.register(email, password, address);
        navigate("/some-route-after-register"); // Ruta a la que quieres redirigir después de registrar
    };

    return (
        <section className='back'>
            <div className='containerDiv'>
                <div className="login-form">
                    <h2>Registrarse</h2>
                    <RegisterForm 
                        handleEmailChange={handleEmailChange} 
                        handleRegister={handleRegister} 
                        handlePasswordChange={handlePasswordChange} 
                        email={email} 
                        password={password} 
                        handleAddressChange={handleAddressChange} 
                        address={address} 
                    />
                </div>
            </div>
        </section>
    );
};

export default Register;

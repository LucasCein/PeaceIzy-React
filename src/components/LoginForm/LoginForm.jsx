import './loginForm.css'
const LoginForm = ({ handleLogin, handleEmailChange, handlePasswordChange, email, password }) => {
    return (
        <div className='formContainer' >
            <form className="form">
                <section>

                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </section>
                <section>

                    <button className='mt-5 mb-3 button' onClick={handleLogin}>Iniciar sesión</button>
                    <button className='button' >Registrarse</button>
                </section>
            </form>
        </div>
    )
}

export default LoginForm


const LoginForm = ({handleLogin,handleEmailChange,handlePasswordChange, email, password}) => {
    return (
        <div>
            <form>
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
                <button onClick={handleLogin}>Iniciar sesión</button>
                <button >Registrarse</button>
            </form>
        </div>
    )
}

export default LoginForm

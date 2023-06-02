import { faRightToBracket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../authContext/authContext"

const LoginWidget = () => {
    const navigate = useNavigate()
    const authentication = useAuth()
    const error=authentication.err
    const nav = () => {
        navigate("/login")
    }
    return (
        
        <div>
            <button onClick={() => nav()} className="btn btn-dark" ><FontAwesomeIcon icon={faRightToBracket} style={{ color: "#ffffff", }} /></button>
        </div> 
        
    )
}

export default LoginWidget
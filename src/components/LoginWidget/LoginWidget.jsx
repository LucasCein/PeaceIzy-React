import { faRightToBracket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom"

const LoginWidget = () => {
    const navigate = useNavigate()

    const nav = () => {
        navigate("/login")
    }

    return (
        <div><button onClick={() => nav()} className="btn btn-dark" ><FontAwesomeIcon icon={faRightToBracket} style={{ color: "#ffffff", }} /></button></div>
    )
}

export default LoginWidget
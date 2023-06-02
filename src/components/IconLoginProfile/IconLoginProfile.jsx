
import ProfileWidget from "../ProfileWidget/ProfileWidget"
import LoginWidget from "../LoginWidget/LoginWidget"
import { useAuth } from "../authContext/authContext"

const IconLoginProfile = () => {
    const authentication = useAuth()
    const error=authentication.err
    return (
        <>
            {error==='logged' ? <ProfileWidget/> : <LoginWidget/> }
        </>
    )
}

export default IconLoginProfile
import React from 'react'
import { useAuth } from './auth'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const navigate = useNavigate()
    const auth = useAuth()

    const handleLogout = () => {
        auth.logOut()
        navigate("/login")
    }


  return (
    <div>WElcome {auth.user}
     <button onClick={handleLogout}>Logout</button>
    </div>

  )
}

export default Profile
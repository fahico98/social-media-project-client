
import { useParams } from "react-router-dom"

import "./Profile.css"

const Profile = () => {

  let params = useParams()

  return (
    <div>
      <p className="text-3xl">Profile !</p>
      <p className="text-xl">User username: {params.username}</p>
    </div>
  )
}

export default Profile

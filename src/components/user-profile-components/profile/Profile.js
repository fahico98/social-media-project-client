
import { useParams } from "react-router-dom"
import ProfileHeader from "../profile-header/ProfileHeader"
import "./Profile.css"

const Profile = () => {

  let params = useParams()

  return (
    <div className="profile">
      <div className="profile-wrapper">
        <ProfileHeader/>
        {/* Posts... */}
      </div>
    </div>
  )
}

export default Profile

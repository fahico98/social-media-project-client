
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot, faCakeCandles } from "@fortawesome/free-solid-svg-icons"

import "./ProfileHeader.css"

const ProfileHeader = () => {
  return (
    <div className="profile-header contour-card">

      <img className="profile-header-cover-image" src={`${process.env.PUBLIC_URL}/assets/cover-pictures/derek-thomson-TWoL-QCZubY-unsplash.jpg`} alt="Cover picture"/>

      <img className="rounded-profile-picture-xl profile-header-picture" src={`${process.env.PUBLIC_URL}/assets/profile-pictures/joanna-nix-walkup-h2pnXHMz8YM-unsplash.jpg`} alt="Profile picture"/>

      <div className="profile-header-body">

        <p className="profile-header-name">Desirée Marrón Carmona</p>

        <p className="profile-header-username">@desiree177</p>

        <p className="profile-header-bio">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>

        <p className="profile-header-info-paragraph mb-1">
          <FontAwesomeIcon icon={faLocationDot} className="profile-header-icon"/>
          <span className="profile-header-info">Madrid - España</span>
        </p>

        <p className="profile-header-info-paragraph">
          <FontAwesomeIcon icon={faCakeCandles} className="profile-header-icon"/>
          <span className="profile-header-info">21 de Abril</span>
        </p>

      </div>

    </div>
  )
}

export default ProfileHeader

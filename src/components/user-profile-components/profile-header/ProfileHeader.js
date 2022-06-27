
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot, faCakeCandles } from "@fortawesome/free-solid-svg-icons"
import { selectAuthenticated, selectUser } from "store/selectors/auth"
import { connect } from "react-redux"

import "./ProfileHeader.css"

const ProfileHeader = (props) => {

  let coverPicture = props.user.images.filter((image) => image.image_type === "user cover picture")[0]
  let profilePicture = props.user.images.filter((image) => image.image_type === "user profile picture")[0]

  let profilePictureUrl = profilePicture
    ? profilePicture.url
    : props.user.gender === "male"
      ? "assets/undraw/undraw_male_avatar_323b.svg"
      : "assets/undraw/undraw_female_avatar_w3jk.svg"

  return (
    <div className="profile-header contour-card">

      {
        coverPicture
          ? <img className="profile-header-cover-image" src={ coverPicture.url } alt="Cover picture"/>
          : <div className="profile-header-cover-element"></div>
      }

      <img className="rounded-profile-picture-xl profile-header-picture" src={ profilePictureUrl } alt={ props.user.name }/>

      <div className="profile-header-body">

        <p className="profile-header-name">{ props.user.name }</p>

        <p className="profile-header-username">@{ props.user.username }</p>

        <p className="profile-header-bio">{ props.user.biography }</p>

        <p className="profile-header-info-paragraph mb-1.5">
          <FontAwesomeIcon icon={faLocationDot} className="profile-header-icon"/>
          <span className="profile-header-info">{ props.user.location }</span>
        </p>

        <p className="profile-header-info-paragraph">
          <FontAwesomeIcon icon={faCakeCandles} className="profile-header-icon"/>
          <span className="profile-header-info">{ props.user.birthday }</span>
        </p>

      </div>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: selectUser(state),
    authenticated: selectAuthenticated(state)
  }
}

export default connect(mapStateToProps)(ProfileHeader)

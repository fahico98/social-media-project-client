
import "./ProfileHeader.css"

const ProfileHeader = () => {
  return (
    <div className="profile-header contour-card">

      <img className="profile-header-cover-image" src={`${process.env.PUBLIC_URL}/assets/cover-pictures/derek-thomson-TWoL-QCZubY-unsplash.jpg`} alt="Cover picture"/>

      <img className="profile-header-picture" src={`${process.env.PUBLIC_URL}/assets/profile-pictures/joanna-nix-walkup-h2pnXHMz8YM-unsplash.jpg`} alt="Profile picture"/>

      <div className="profile-header-body">
        <p className="profile-header-name">Desirée Marrón Carmona</p>
        <p className="profile-header-username">@desiree177</p>
        <p className="profile-header-bio">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
        <p className="profile-header-location">Madrid - España</p>
        <p className="profile-header-birthday">21 de Abril</p>
      </div>

    </div>
  )
}

export default ProfileHeader

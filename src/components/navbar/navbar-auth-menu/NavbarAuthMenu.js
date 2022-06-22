
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell, faCommentDots, faUserCircle } from "@fortawesome/free-solid-svg-icons"
import { Link, useNavigate } from "react-router-dom"
import { connect } from "react-redux"
import { selectUser } from "store/selectors/auth"
import { useState, useEffect } from "react"
import { actionCreators } from "store"

import "components/navbar/navbar-auth-menu/NavbarAuthMenu.css"

const NavbarAuthMenu = props => {

  let navigate = useNavigate()

  const [dropdownShown, setDropdownShown] = useState(false)
  const toggleDropdown = () => setDropdownShown(!dropdownShown)

  useEffect(() => {
    window.onclick = dropdownShown ? () => setDropdownShown(false) : null
  }, [dropdownShown])

  let signOut = async () => {
    navigate("/")
    await props.signOut()
  }

  return (
    <div className="navbar-auth-menu">

      <div className="navbar-icon-container mr-3.5">
        <FontAwesomeIcon icon={faCommentDots} className="navbar-icon"/>
        <div className="navbar-icon-badge">+9</div>
      </div>

      <div className="navbar-icon-container mr-3.5">
        <FontAwesomeIcon icon={faBell} className="navbar-icon"/>
        <div className="navbar-icon-badge">+9</div>
      </div>

      <div className="navbar-icon-container mr-0" onClick={() => toggleDropdown()}>
        <FontAwesomeIcon icon={faUserCircle} className="navbar-icon"/>
      </div>

      <div className={ `navbar-auth-menu-content contour-card ${ dropdownShown ? "" : "hidden" }`}>

        <div onClick={() => navigate(`/${props.user.username}`)} className="navbar-auth-menu-wrapper-link border-b">
          <p className="navbar-auth-menu-link"><span className="font-normal">Signed in as </span>{props.user.username}</p>
        </div>

        <div className="navbar-auth-menu-links-wrapper">
          <Link to="/" className="navbar-auth-menu-link hover:bg-elem-secondary mb-1">Feed</Link>
          <Link to="/" className="navbar-auth-menu-link hover:bg-elem-secondary mb-1">Chat</Link>
          <Link to="/" className="navbar-auth-menu-link hover:bg-elem-secondary mb-1">Frieds</Link>
          <Link to="/" className="navbar-auth-menu-link hover:bg-elem-secondary">Settings</Link>
        </div>

        <div onClick={async () => await signOut()} className="navbar-auth-menu-wrapper-link border-t">
          <p className="navbar-auth-menu-link">Sign out</p>
        </div>

      </div>

    </div>
  )
}

const mapStateToProps = (state) => {
  return { user: selectUser(state) }
}

const mapDispatchToProps = (dispatch) => {
  return { signOut: () => dispatch(actionCreators.signOut()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarAuthMenu)

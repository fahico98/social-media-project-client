
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell, faCommentDots, faUserCircle, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

import "components/navbar/Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="basis-1/3 flex justify-start">
          <Link to="/">
            <p className="text-custom-dark-blue-500 text-base font-medium font-mono cursor-pointer">Social<span className="text-custom-dark-blue-500 font-bold font-sans underline decoration-custom-yellow-500 text-3xl">Media</span></p>
          </Link>
        </div>

        <div className="basis-1/3 flex justify-center">
          <div className="relative w-4/5">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-custom-dark-blue-500 absolute top-2 left-2" style={{ width: "1.45rem", height: "1.45rem" }}/>
            <input type="text" className="own-search-input w-full" placeholder="Buscar"/>
          </div>
        </div>

        <div className="basis-1/3 flex justify-end">

          <div className="navbar-icon-container mr-3.5">
            <FontAwesomeIcon icon={faUserCircle} className="navbar-icon"/>
          </div>

          <div className="navbar-icon-container mr-3.5">
            <FontAwesomeIcon icon={faCommentDots} className="navbar-icon"/>
            <div className="navbar-icon-badge">+9</div>
          </div>

          <div className="navbar-icon-container mr-2">
            <FontAwesomeIcon icon={faBell} className="navbar-icon"/>
            <div className="navbar-icon-badge">+9</div>
          </div>

          <Link to="/sign-in" className="mx-3">Sign in</Link>
          <Link to="/sign-up" className="mr-3">Sign up</Link>
          <Link to="/profile/fahico98">Profile</Link>

        </div>
      </div>
    </nav>
  )
}

export default Navbar

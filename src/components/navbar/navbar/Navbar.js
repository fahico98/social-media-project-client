
import NavbarAuthMenu from "components/navbar/navbar-auth-menu/NavbarAuthMenu"
import NavbarGuestMenu from "components/navbar/navbar-guest-menu/NavbarGuestMenu"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { selectAuthenticated } from "store/selectors/auth"

import "components/navbar/navbar/Navbar.css"

const Navbar = props => {
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
          { props.authenticated ? <NavbarAuthMenu/> : <NavbarGuestMenu/> }
        </div>

      </div>
    </nav>
  )
}

const mapStateToProps = state => {
  return { authenticated: selectAuthenticated(state) }
}

export default connect(mapStateToProps)(Navbar)

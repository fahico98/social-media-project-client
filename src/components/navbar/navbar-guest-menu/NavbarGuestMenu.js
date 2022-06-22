
import React from "react"
import { Link } from "react-router-dom"

import "components/navbar/navbar-guest-menu/NavbarGuestMenu.css"

const NavbarGuestMenu = (props) => {
  return (
    <div>
      <Link to="/sign-in" className="navbar-link mr-6">Sign in</Link>
      <Link to="/sign-up" className="navbar-link">Sign up</Link>
    </div>
  )
}

export default NavbarGuestMenu

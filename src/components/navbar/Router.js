
import Feed from "views/feed/Feed"
import Signin from "views/signin/Signin"
import Register from "views/register/Register"
import Page404 from "views/page404/Page404"
import Profile from "components/user-profile-components/profile/Profile"
import Center from "components/feed-components/center/Center"

import React from "react"
import { Routes, Route, } from "react-router-dom"
import { useSelector } from "react-redux"

const Router = () => {

  const state = useSelector((state) => state)

  return (
    <Routes>

      <Route exact path="/" element={<Feed/>}>
        <Route path="/" element={<Center/>}/>
        <Route path="profile/:username" element={<Profile/>}/>
      </Route>

      <Route path="sign-in" element={<Signin/>}/>
      <Route path="sign-up" element={<Register/>}/>
      <Route path="*" element={<Page404/>}/>

    </Routes>
  )
}

export default Router

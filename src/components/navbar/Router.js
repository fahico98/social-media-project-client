
import Feed from "views/feed/Feed"
import Signin from "views/signin/Signin"
import Signup from "views/signup/Signup"
import Page404 from "views/page404/Page404"
import Profile from "components/user-profile-components/profile/Profile"
import Center from "components/feed-components/center/Center"
import ProtectedRoute from "components/navbar/ProtectedRoute"

import React from "react"
import { Routes, Route, } from "react-router-dom"
// import { useSelector } from "react-redux"

const Router = () => {

  // const state = useSelector((state) => state)

  return (
    <Routes>

      <Route path="/sign-in" element={ <ProtectedRoute guard="guest"><Signin/></ProtectedRoute> }/>
      <Route path="/sign-up" element={ <ProtectedRoute guard="guest"><Signup/></ProtectedRoute> }/>

      <Route exact path="/" element={<Feed/>}>
        <Route path="/" element={<Center/>}/>
        <Route path="/:username" element={ <ProtectedRoute guard="authenticated"><Profile/></ProtectedRoute> }/>
      </Route>

      <Route path="/*" element={<Page404/>}/>

    </Routes>
  )
}

export default Router

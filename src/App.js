
import React from "react"
import { Routes, Route, } from "react-router-dom"

import Feed from "./views/feed/Feed"
import Login from "./views/login/Login"
import Register from "./views/register/Register"
import Page404 from "./views/page404/Page404"

import Navbar from "./components/navbar/Navbar"
import Profile from "./components/feed-components/profile/Profile"
import Center from "./components/feed-components/center/Center"
import Right from "./components/feed-components/right/Right"

import "./styles/index.css"
import "./styles/buttons.css"
import "./App.css"

function App() {
  return (
    <div id="app">

      <Navbar/>

      <main>
        <Routes>

          <Route path="/" element={<Feed/>}>

            <Route path="/" element={
              <React.Fragment>
                <Center/>
                <Right/>
              </React.Fragment>
            }/>

            <Route path="profile/:username" element={<Profile/>}/>

          </Route>

          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="*" element={<Page404/>}/>

        </Routes>
      </main>

    </div>
  )
}

export default App

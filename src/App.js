
import Navbar from "components/navbar/Navbar"
import Router from "components/navbar/Router"

import React from "react"
import "styles/index.css"
import "styles/buttons.css"
import "App.css"

function App() {
  return (
    <div id="app">
      <Navbar/>
      <main>
        <Router/>
      </main>
    </div>
  )
}

export default App

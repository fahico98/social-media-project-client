
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import { attempt } from "store/action-creators"
import { store } from "./store/store"
import axios from "axios"
import App from "./App"

axios.defaults.baseURL = "http://127.0.0.1:8000/api"

store.dispatch(attempt(localStorage.getItem("token")))
  .then(() => {
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <App/>
          </Router>
        </Provider>
      </React.StrictMode>,
      document.getElementById("root")
    )
  })

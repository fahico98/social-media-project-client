
import { useSelector, useDispatch } from "react-redux"
import React, { useState } from "react"
import { actionCreators } from "store"
import axios from "axios"

import "views/signin/Signin.css"

import * as validator from "util/validator"

const Signin = () => {

  const [emailUsername, setEmailUsername] = useState("")
  const [password, setPassword] = useState("")
  const [emailUsernameWarning, setEmailUsernameWarning] = useState("")
  const [passwordWarning, setPasswordWarning] = useState("")
  const [validatedForm, setValidatedForm] = useState(true)
  const [loading, setLoading] = useState(false)

  const { token } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  let handleChange = (event) => {

    let id = event.target.id
    let value = event.target.value

    switch(id){

      case "email-username":
        setEmailUsername(value)
        break

      case "password":
        setPassword(value)
        break
    }
  }

  let handleSubmit = async (event) => {

    event.preventDefault()

    setLoading(true)

    let response = await dispatch(actionCreators.signIn({ "email_username": emailUsername, "password": password }))
    if(response.status === 200){
      await dispatch(actionCreators.attempt(response.data.token))
    }

    setLoading(false)
  }

  let validateForm = () => {

    emailUsernameValidation()
    if (!validatedForm) return false

    passwordValidation()
    return validatedForm
  }

  let emailUsernameValidation = () => {

    if(!emailUsername){
      setEmailUsernameWarning("Please enter your email or username")
      setValidatedForm(false)
      return
    }

    let str = validator.email(emailUsername)

    if(str){
      setEmailUsernameWarning("The entry doesn't match an email")
      setValidatedForm(false)
      return
    }

    setValidatedForm(true)
  }

  let passwordValidation = () => {

    if(!password){
      setPasswordWarning("Please enter your password")
      setValidatedForm(false)
      return
    }

    setValidatedForm(true)
  }

  return (
    <div className="login">

      <img src="./assets/login-wave.svg" alt="Login wave" className="login-wave"/>

      <div className="login-container margin-x">
        <div className="login-flex max-width">

          <img src="./assets/undraw/undraw_two_factor_authentication_namy.svg" alt="Login image" className="login-img"/>

          <div className="login-form-card">
            <form className="login-form" onSubmit={handleSubmit}>

              <div className="login-form-input-wrapper">
                <p className="login-form-title">Sing in</p>
                <p className="login-form-description">Input your data to access your account, please avoid sharing your access data with anyone else.</p>
              </div>

              <div className="login-form-input-wrapper">
                <label htmlFor="email-username" className="login-form-label">Emial or username</label>
                <input value={emailUsername} onChange={handleChange} id="email-username" type="text" className="own-input w-full" placeholder="Email or username"/>
              </div>

              <div className="login-form-input-wrapper">
                <label htmlFor="password" className="login-form-label">Password</label>
                <input value={password} onChange={handleChange} id="password" type="password" className="own-input w-full" placeholder="Password"/>
              </div>

              <div className="login-form-input-wrapper">
                <a href="#" className="custom-link-base">Forgot your password ?</a>
              </div>

              <div className="login-form-input-wrapper mb-0">
                <button type="submit" className="btn-yellow-md">Send</button>
              </div>

            </form>
          </div>

        </div>
      </div>

    </div>
  )
}

// const mapStateToProps = (state) => {
//   return { token: state.auth.token }
// }

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actionCreators, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Signin)

export default Signin

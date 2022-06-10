
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import React, { useState } from "react"
import { actionCreators } from "store"

import { connect } from "react-redux"
import { selectAuthenticated, selectToken, selectUser } from "store/selectors/auth"

import "views/signin/Signin.css"

import * as validator from "util/validator"

const Signin = (props) => {

  const [emailUsername, setEmailUsername] = useState("")
  const [password, setPassword] = useState("")
  const [emailUsernameWarning, setEmailUsernameWarning] = useState("")
  const [passwordWarning, setPasswordWarning] = useState("")
  const [validatedForm, setValidatedForm] = useState(true)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

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

    let response = await props.signIn(emailUsername, password)

    if(response.status === 200){
      let bufferUsername = await props.attempt(response.data.token)
      navigate(`/${bufferUsername}`)
    }
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
    <div className="signin">

      <img src="./assets/signin-wave.svg" alt="Signin wave" className="signin-wave"/>

      <div className="signin-container margin-x">
        <div className="signin-flex max-width">

          <img src="./assets/undraw/undraw_two_factor_authentication_namy.svg" alt="Signin image" className="signin-img"/>

          <div className="signin-form-card">
            <form className="signin-form" onSubmit={handleSubmit}>

              <div className="signin-form-input-wrapper">
                <p className="signin-form-title">Sing in</p>
                <p className="signin-form-description">Input your data to access your account, please avoid sharing your access data with anyone else.</p>
              </div>

              <div className="signin-form-input-wrapper">
                <label htmlFor="email-username" className="signin-form-label">Emial or username</label>
                <input value={emailUsername} onChange={handleChange} id="email-username" type="text" className="own-input w-full" placeholder="Email or username"/>
              </div>

              <div className="signin-form-input-wrapper">
                <label htmlFor="password" className="signin-form-label">Password</label>
                <input value={password} onChange={handleChange} id="password" type="password" className="own-input w-full" placeholder="Password"/>
              </div>

              <div className="signin-form-input-wrapper">
                <a href="#" className="custom-link-base">Forgot your password ?</a>
              </div>

              <div className="signin-form-input-wrapper mb-0">
                <button type="submit" className="btn-yellow-md">Send</button>
              </div>

            </form>
          </div>

        </div>
      </div>

    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {

    signIn: async (emailUsername, password) => {
      return await dispatch(actionCreators.signIn({ "email_username": emailUsername, "password": password }))
    },

    attempt: async (token) => await dispatch(actionCreators.attempt(token))
  }
}

// Por el momento no se está utilizando el estado...
const mapStateToProps = state => {
  return {
    user: selectUser(state),
    token: selectToken(state),
    authenticated: selectAuthenticated(state)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)

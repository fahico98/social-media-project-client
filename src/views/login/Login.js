
import "./Login.css"

const Login = () => {
  return (
    <div className="login">

      <img src="./assets/login-wave.svg" alt="Login wave" className="login-wave"/>

      <div className="login-container margin-x">
        <div className="login-flex max-width">

          <img src="./assets/undraw/undraw_two_factor_authentication_namy.svg" alt="Login image" className="login-img"/>

          <div className="login-form-card">
            <form className="login-form">

              <div className="login-form-input-wrapper">
                <p className="login-form-title">Sing in</p>
                <p className="login-form-description">Input your data to access your account, please avoid sharing your access data with anyone else.</p>
              </div>

              <div className="login-form-input-wrapper">
                <label htmlFor="email-username" className="login-form-label">Emial or username</label>
                <input id="email-username" type="text" className="own-input w-full" placeholder="Email or username"/>
              </div>

              <div className="login-form-input-wrapper">
                <label htmlFor="password" className="login-form-label">Password</label>
                <input id="password" type="password" className="own-input w-full" placeholder="Password"/>
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

export default Login

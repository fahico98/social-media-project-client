
import "./Signup.css"

const Signup = () => {
  return (
    <div className="signup">

      <img src="./assets/signup-wave.svg" alt="Signup wave" className="signup-wave"/>

      {/*

      -> Nombre
      -> Correo electrónico
      -> Nombre de usuario
      -> País
      -> Ciudad
      -> Sexo
      -> Contraseña
      -> Verificación de contaseña

      */}

      <div className="signup-container margin-x">
        <div className="signup-flex max-width">

          <div className="signup-form-card">

            <p className="signup-form-title">Create account</p>

            <form className="signup-form">

              <div className="signup-form-input-wrapper">
                <label htmlFor="name" className="signup-form-label">Name</label>
                <input type="text" id="name" className="own-input w-full" placeholder="Name"/>
              </div>

              <div className="signup-form-input-wrapper">
                <label htmlFor="email" className="signup-form-label">Email</label>
                <input type="text" id="email" className="own-input w-full" placeholder="Email"/>
              </div>

              <div className="signup-form-input-wrapper">
                <label htmlFor="username" className="signup-form-label">Username</label>
                <input type="text" id="username" className="own-input w-full" placeholder="Username"/>
              </div>

              <div className="signup-form-input-wrapper">
                <label htmlFor="gender" className="signup-form-label">Gender</label>
                <input type="text" id="gender" className="own-input w-full" placeholder="Gender"/>
              </div>

              <div className="signup-form-input-wrapper">
                <label htmlFor="country" className="signup-form-label">Country</label>
                <input type="text" id="country" className="own-input w-full" placeholder="Country"/>
              </div>

              <div className="signup-form-input-wrapper">
                <label htmlFor="city" className="signup-form-label">City</label>
                <input type="text" id="city" className="own-input w-full" placeholder="City"/>
              </div>

              <div className="signup-form-input-wrapper">
                {/* <button type="submit" className="btn-yellow-md mr-3">Send</button> */}
                <button type="button" className="btn-yellow-md mr-3">Send</button>
                <button type="button" className="btn-light-blue-md">Clean form</button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Signup

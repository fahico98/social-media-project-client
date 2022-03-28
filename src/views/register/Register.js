
import "./Register.css"

const Register = () => {
  return (
    <div className="register">

      <img src="./assets/register-wave.svg" alt="Register wave" className="register-wave"/>

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

      <div className="register-container margin-x">
        <div className="register-flex max-width">

          <div className="register-form-card">

            <p className="register-form-title">Create account</p>

            <form className="register-form">

              <div className="register-form-input-wrapper">
                <label htmlFor="name" className="register-form-label">Name</label>
                <input type="text" id="name" className="own-input w-full" placeholder="Name"/>
              </div>

              <div className="register-form-input-wrapper">
                <label htmlFor="email" className="register-form-label">Email</label>
                <input type="text" id="email" className="own-input w-full" placeholder="Email"/>
              </div>

              <div className="register-form-input-wrapper">
                <label htmlFor="username" className="register-form-label">Username</label>
                <input type="text" id="username" className="own-input w-full" placeholder="Username"/>
              </div>

              <div className="register-form-input-wrapper">
                <label htmlFor="gender" className="register-form-label">Gender</label>
                <input type="text" id="gender" className="own-input w-full" placeholder="Gender"/>
              </div>

              <div className="register-form-input-wrapper">
                <label htmlFor="country" className="register-form-label">Country</label>
                <input type="text" id="country" className="own-input w-full" placeholder="Country"/>
              </div>

              <div className="register-form-input-wrapper">
                <label htmlFor="city" className="register-form-label">City</label>
                <input type="text" id="city" className="own-input w-full" placeholder="City"/>
              </div>

              <div className="register-form-input-wrapper">
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

export default Register

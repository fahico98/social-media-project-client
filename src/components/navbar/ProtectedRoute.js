
import { Navigate } from "react-router-dom"
import { selectAuthenticated, selectUser } from "store/selectors/auth"
import { connect } from "react-redux"

const ProtectedRoute = (props) => {
  if (props.guard === "authenticated" && !props.authenticated) return <Navigate to="/sign-in" replace={true}/>
  if (props.guard === "guest" && props.authenticated) return <Navigate to="/" replace={true}/>
  return props.children
}

const mapStateToProps = state => {
  return {
    user: selectUser(state),
    authenticated: selectAuthenticated(state)
  }
}

export default connect(mapStateToProps)(ProtectedRoute)

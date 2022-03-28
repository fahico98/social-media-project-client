
import { useLocation } from "react-router-dom"

import "./Page404.css"

const Page404 = () => {

  let location = useLocation()

  return (
    <div>
      <p className="text-5xl">404</p>
      <p className="text-xl">{ location.pathname }</p>
    </div>
  )
}

export default Page404

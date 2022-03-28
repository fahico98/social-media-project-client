
import Share from "../share/Share"
import Post from "../post/Post"

import "./Center.css"

const Center = () => {
  return (
    <div className="center">
      <div className="center-wrapper">
        <Share/>
        <Post/>
      </div>
    </div>
  )
}

export default Center

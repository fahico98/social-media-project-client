
import Left from "../../components/feed-components/left/Left"
import { Outlet } from "react-router-dom"

import "./Feed.css"

const Feed = () => {
  return (
    <div className="feed">
      <Left/>
      <Outlet/>
    </div>
  )
}

export default Feed


import Left from "../../components/feed-components/left/Left"
import Right from "../../components/feed-components/right/Right"
import { Outlet } from "react-router-dom"

import "./Feed.css"

const Feed = () => {
  return (
    <div className="feed">
      <Left/>
      <Outlet/>
      <Right/>
    </div>
  )
}

export default Feed

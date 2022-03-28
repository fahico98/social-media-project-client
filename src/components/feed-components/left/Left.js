
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouseChimney, faCommentDots, faUserGroup, faCircleUser, faGear } from "@fortawesome/free-solid-svg-icons"

import "./Left.css"

const Left = () => {
  return (
    <div className="left">
      <div className="left-wrapper">

        <ul className="left-list">

          <li className="left-list-item">
            <FontAwesomeIcon icon={faHouseChimney} className="left-list-item-icon"/>
            <span className="left-list-item-text">Feed</span>
          </li>

          <li className="left-list-item">
            <FontAwesomeIcon icon={faCommentDots} className="left-list-item-icon"/>
            <span className="left-list-item-text">Chat</span>
          </li>

          <li className="left-list-item">
            <FontAwesomeIcon icon={faUserGroup} className="left-list-item-icon"/>
            <span className="left-list-item-text">Friends</span>
          </li>

          <li className="left-list-item">
            <FontAwesomeIcon icon={faCircleUser} className="left-list-item-icon"/>
            <span className="left-list-item-text">Profile</span>
          </li>

          <li className="left-list-item">
            <FontAwesomeIcon icon={faGear} className="left-list-item-icon"/>
            <span className="left-list-item-text">Settings</span>
          </li>

          {/* ----- */}

          {/* <li className="left-list-item">
            <HomeRoundedIcon className="left-list-item-icon"/>
            <span className="left-list-item-text">Feed</span>
          </li>

          <li className="left-list-item">
            <ChatRoundedIcon className="left-list-item-icon"/>
            <span className="left-list-item-text">Chat</span>
          </li>

          <li className="left-list-item">
            <VideoLibraryRoundedIcon className="left-list-item-icon"/>
            <span className="left-list-item-text">Videos</span>
          </li>

          <li className="left-list-item">
            <GroupRoundedIcon className="left-list-item-icon"/>
            <span className="left-list-item-text">Groups</span>
          </li>

          <li className="left-list-item">
            <BookmarksRoundedIcon className="left-list-item-icon"/>
            <span className="left-list-item-text">Bookmarks</span>
          </li>

          <li className="left-list-item">
            <EventIcon className="left-list-item-icon"/>
            <span className="left-list-item-text">Events</span>
          </li>

          <li className="left-list-item">
            <SchoolRoundedIcon className="left-list-item-icon"/>
            <span className="left-list-item-text">Courses</span>
          </li>

          <li className="left-list-item">
            <BusinessCenterIcon className="left-list-item-icon"/>
            <span className="left-list-item-text">Jobs</span>
          </li>

          <li className="left-list-item">
            <HelpIcon className="left-list-item-icon"/>
            <span className="left-list-item-text">FAQs</span>
          </li> */}

        </ul>

      </div>
    </div>
  )
}

export default Left;


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faImage, faVideo, faTag, faLocationDot, faFaceGrinBeam } from "@fortawesome/free-solid-svg-icons"

import "./Share.css";

const Share = () => {
  return (
    <div className="share contour-card">

      <img className="share-header-profile-picture rounded-profile-picture-sm" src="assets/profile-pictures/joanna-nix-walkup-h2pnXHMz8YM-unsplash.jpg" alt="Profile pictures"/>

      <div className="ml-3 grow">
        <textarea className="share-header-textarea own-input" rows="3" placeholder="What are you thinking ?"></textarea>
        <div className="flex justify-between items-center mt-1">

          <div className="flex flex-row">

            <div className="share-action-icon-wrapper" title="Picture">
              <FontAwesomeIcon icon={faImage} className="share-action-icon"/>
            </div>

            <div className="share-action-icon-wrapper" title="Video">
              <FontAwesomeIcon icon={faVideo} className="share-action-icon"/>
            </div>

            <div className="share-action-icon-wrapper" title="Tag">
              <FontAwesomeIcon icon={faTag} className="share-action-icon"/>
            </div>

            <div className="share-action-icon-wrapper" title="Location">
              <FontAwesomeIcon icon={faLocationDot} className="share-action-icon"/>
            </div>

            <div className="share-action-icon-wrapper" title="Feeling">
              <FontAwesomeIcon icon={faFaceGrinBeam} className="share-action-icon"/>
            </div>

          </div>

          <button type="button" className="btn-yellow-sm">Share</button>

        </div>
      </div>
    </div>
  )
}

export default Share;

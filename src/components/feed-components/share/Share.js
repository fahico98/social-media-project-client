
import StarterKit from "@tiptap/starter-kit"
import Placeholder from "@tiptap/extension-placeholder"
import { EditorContent, useEditor } from "@tiptap/react"
import Underline from "@tiptap/extension-underline"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhotoFilm, faAt, faLocationDot, faFaceGrinBeam, faFont } from "@fortawesome/free-solid-svg-icons"
import TextEditor from "components/feed-components/share/text-editor/TextEditor"
import { selectUser } from "store/selectors/auth"
import { connect } from "react-redux"

import "components/feed-components/share/Share.css"

const Share = (props) => {

  let profilePicture = props.user.images.filter((image) => image.image_type === "user profile picture")[0]

  let profilePictureUrl = profilePicture
    ? profilePicture.url
    : props.user.gender === "male"
      ? "assets/undraw/undraw_male_avatar_323b.svg"
      : "assets/undraw/undraw_female_avatar_w3jk.svg"

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Placeholder.configure({ placeholder: "What are you thinking ?" })
    ]
  })

  return (
    <div className="share contour-card">

      <img className="share-header-profile-picture rounded-profile-picture-sm" src={ profilePictureUrl } alt={ props.user.name }/>

      <div className="ml-3 grow">

        <EditorContent editor={editor}/>
        <TextEditor editor={editor}/>

        {/* <textarea className="share-header-textarea own-input" rows="3" placeholder="What are you thinking ?"></textarea> */}

        <div className="flex justify-between items-center mt-2">

          <div className="flex flex-row">

            <button className="share-action-icon-button" title="Picture">
              <FontAwesomeIcon icon={faPhotoFilm} className="share-action-icon"/>
            </button>

            <button className="share-action-icon-button" title="Tag">
              <FontAwesomeIcon icon={faAt} className="share-action-icon"/>
            </button>

            <button className="share-action-icon-button" title="Feeling">
              <FontAwesomeIcon icon={faFont} className="share-action-icon"/>
            </button>

            <button className="share-action-icon-button" title="Location">
              <FontAwesomeIcon icon={faLocationDot} className="share-action-icon"/>
            </button>

            <button className="share-action-icon-button" title="Feeling">
              <FontAwesomeIcon icon={faFaceGrinBeam} className="share-action-icon"/>
            </button>

          </div>

          <button type="button" className="btn-yellow-sm">Share</button>

        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { user: selectUser(state) }
}

export default connect(mapStateToProps)(Share)

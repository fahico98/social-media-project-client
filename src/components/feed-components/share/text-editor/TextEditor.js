
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBold, faItalic, faStrikethrough, faUnderline, faRotateRight, faRotateLeft, faXmark } from "@fortawesome/free-solid-svg-icons"

import "components/feed-components/share/text-editor/TextEditor.css"

const TextEditor = ({ editor }) => {

  if (!editor) return null

  return (
    <div className="text-editor">

      <div className="text-editor-buttons-wrapper">

        {/* Bold */}
        <button onClick={() => editor.chain().focus().toggleBold().run()} className={`${editor.isActive("bold") ? "is-active" : ""} text-editor-button mr-1`}>
          <FontAwesomeIcon icon={faBold} className="text-editor-icon"/>
        </button>

        {/* Italic */}
        <button onClick={() => editor.chain().focus().toggleItalic().run()} className={`${editor.isActive("italic") ? "is-active" : ""} text-editor-button mr-1`}>
          <FontAwesomeIcon icon={faItalic} className="text-editor-icon"/>
        </button>

        {/* Strike */}
        <button onClick={() => editor.chain().focus().toggleStrike().run()} className={`${editor.isActive("strike") ? "is-active" : ""} text-editor-button mr-1`}>
          <FontAwesomeIcon icon={faStrikethrough} className="text-editor-icon"/>
        </button>

        {/* Underline */}
        <button onClick={() => editor.chain().focus().toggleUnderline().run()} className={`${editor.isActive("underline") ? "is-active" : ""} text-editor-button`}>
          <FontAwesomeIcon icon={faUnderline} className="text-editor-icon"/>
        </button>

      </div>

      <div className="text-editor-buttons-wrapper">

        {/* Undo */}
        <button onClick={() => editor.chain().focus().undo().run()} className="text-editor-button mr-1">
          <FontAwesomeIcon icon={faRotateLeft} className="text-editor-icon"/>
        </button>

        {/* Clear */}
        <button onClick={() => console.log("Clear")} className="text-editor-button mr-1">
          <FontAwesomeIcon icon={faXmark} className="text-editor-icon"/>
        </button>

        {/* Redo */}
        <button onClick={() => editor.chain().focus().redo().run()} className="text-editor-button">
          <FontAwesomeIcon icon={faRotateRight} className="text-editor-icon"/>
        </button>

      </div>

    </div>
  )
}

export default TextEditor

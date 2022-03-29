
import "./Post.css"

const Post = () => {
  return (
    <div className="post contour-card">
      <div className="post-wrapper">

        <div className="post-header">
          <p className="post-owner-name-text">Fabián Cárcamo</p>
          <p className="post-datetime-text">3 days ago</p>
        </div>

        <div className="post-image-wrapper">
          <img className="post-image" src="assets/post-pictures/Temple_Bar-Dublin.jpg" alt="Foto"/>
        </div>

        <div className="post-footer">

        </div>

      </div>
    </div>
  )
}

export default Post

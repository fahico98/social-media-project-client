
import "components/feed-components/post/Post.css"

const Post = (props) => {

  let mediaEmpty = !props.post.images.length && !props.post.videos.length

  return (
    <div className="post contour-card">
      <div className="post-wrapper">

        <div className="post-header">
          <p className="post-owner-name-text">{ props.post.user.name }</p>
          <p className="post-datetime-text">{ props.post.created_at }</p>
        </div>

        {
          mediaEmpty
            ?
          ""
          // <div className="h-0 w-full border-b border-elem-muted"></div>
            :
          <div className="post-image-wrapper">
            <img className="post-image" src="assets/post-pictures/Temple_Bar-Dublin.jpg" alt="Foto"/>
          </div>
        }

        <div className={`${mediaEmpty ? "" : "pt-3"} post-content-wrapper`}>
          <p className="post-content-text">{ props.post.content }</p>
        </div>

        <div className="post-footer">

        </div>

      </div>
    </div>
  )
}

export default Post

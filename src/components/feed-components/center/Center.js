
import Share from "components/feed-components/share/Share"
import Post from "components/feed-components/post/Post"
import React, { useState, useEffect } from "react"
import { selectAuthenticated } from "store/selectors/auth"
import { connect } from "react-redux"

import "./Center.css"
import axios from "axios"

const Center = (props) => {

  const [postsArray, setPostsArray] = useState([])

  useEffect(async () => {

    await axios.get("post")
      .then((response) => { if (response.status === 200) setPostsArray(response.data.posts) })
      .catch((error) => console.log(error))

  }, [])

  return (
    <div className="center">
      <div className="center-wrapper">
        { props.authenticated ? <Share/> : "" }
        { postsArray.map((post) => <Post post={post} key={post.id}/>) }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { authenticated: selectAuthenticated(state) }
}

export default connect(mapStateToProps)(Center)

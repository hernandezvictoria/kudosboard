import React from "react";
import "./Post.css";
import deleteIcon from '../../assets/icons8-delete-48.png'
import upvoteIcon from '../../assets/icons8-up-60.png'

function Post({ onUpvotePost, onDeletePost, id, board_id, message, gif_path, author, pinned, upvotes }) {

  const handleDelete = (event) => {
    event.stopPropagation();
    onDeletePost(parseInt(id));
  };

  const handleUpvote = (event) => {
    event.stopPropagation();
    onUpvotePost(parseInt(id));
  }

  const handlePin = (event) => {

  }

  const handlePostClick = (event) => {

  }



  return (
    <div className="post" onClick={handlePostClick}>
        <p className="post-message">{message}</p>
        <p className="post-author">{author}</p>
        <img className="post-gif" src={gif_path} alt={"gif"} aria-label="gif image"/>

        <button className="upvotes" onClick={handleUpvote}> upvotes: {upvotes} </button>

        <section className="post-info">
          <button className="delete" onClick={handleDelete}>
            <img src={deleteIcon} alt="delete"/>
          </button>
            <p className="pinned" onClick={handlePin}>📌</p>
        </section>



    </div>
  );
}

export default Post;

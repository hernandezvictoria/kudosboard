import React from "react";
import "./Post.css";
import deleteIcon from '../../assets/icons8-delete-48.png'

function Post({ onDeletePost, id, board_id, message, gif_path, author, pinned, upvotes }) {

  const handleDelete = (event) => {
    event.stopPropagation();
    onDeletePost(parseInt(id));
  };

  const handleUpvote = (event) => {

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
        <section className="post-info">
            <p className="upvotes" onClick={handleUpvote}>⬆️ {upvotes}</p>
            <p className="pinned" onClick={handlePin}>📌</p>
        </section>
        <button className="delete" onClick={handleDelete}>
          <img src={deleteIcon} alt="delete"/>
        </button>


    </div>
  );
}

export default Post;

import React, { useState } from "react";
import "./AddPost.css";
import addIcon from '../../assets/Microsoft-Fluentui-Emoji-Mono-Plus.512.png'

function AddPost({ onAddPost }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedGif, setSelectedGif] = useState(null);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSearchResults([]);
    setSelectedGif(null);
  };

  const handleAddPost = (event) => {
    event.preventDefault();
    const message = event.target['post-message'].value;
    const author = event.target['post-author'].value;
    const gif_path = selectedGif ? selectedGif : "https://picsum.photos/200";

    const newPost = {
      gif_path,
      message,
      author
    };

    onAddPost(newPost);
    closeModal();
  };

  const handleSearchGifs = async (event) => {
    event.preventDefault();
    const searchTerm = event.target['gif-search'].value;
    const apiKey = import.meta.env.VITE_API_KEY;
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=6`);
    const data = await response.json();
    setSearchResults(data.data);
  };

  // format search results as grid of gifs
  const getSearchGifs = () => {
    return (
      <form className="add-form" onSubmit={handleSearchGifs}>
        <input type="text" className="name-input" name="gif-search" placeholder="search gifs" required />
        <button aria-label="search" className="submit-button" type="submit">search</button>
      </form>
    );
  };

  const getModal = () => {
    if (modalOpen) {
      return (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(event) => event.stopPropagation()}>
            <h2 className="modal-title">create a new post</h2>
            {getSearchGifs()}
            {/* search gif */}
            <div className="gif-results">
                {searchResults.map(gif => (
                  <img className="gif"
                    key={gif.id}
                    src={gif.images.fixed_height.url}
                    alt={gif.title}
                    onClick={() => setSelectedGif(gif.images.fixed_height.url)}
                    style={{ border: selectedGif === gif.images.fixed_height.url ? '2px solid blue' : 'none' }}
                  />
                ))}
              </div>
              {/* add post form */}
            <form className="add-form" onSubmit={handleAddPost}>
              <input type="text" className="name-input" name="post-message" placeholder="message *" required />
              <input type="text" className="author-input" name="post-author" placeholder="author" />
              <button aria-label="submit new post" className="submit-button" type="submit">create</button>
            </form>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <button aria-label="add new Post" className="add-button" onClick={openModal}>
        <img className="add-image" src={addIcon} alt="create new post icon" />
      </button>
      {getModal()}
    </div>
  );
}

export default AddPost;

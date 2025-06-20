import React, { useRef } from "react";
import "./Search.css";
import clearIcon from '../../assets/8666736_x_circle_icon.png'
import searchIcon from '../../assets/3844432_magnifier_search_zoom_icon.png'


function Search(props) {
  const inputRef = useRef(null);

  const handleSearch = (event) => {
    event.preventDefault();
    props.onSearch(inputRef.current.value);
  };

  const handleClear = (event) => {
    event.preventDefault();
    props.onClear();
    inputRef.current.value = ""; // clear the input field too
  };

  return (
    <form className="search-form" onSubmit={handleSearch} onReset={handleClear}>
      <input
        className="search-input"
        type="text"
        placeholder="search boards"
        ref={inputRef}
      />
      <button aria-label="submit search" type="submit" className="search-button">
        <img className="button-image" src={searchIcon} alt="search icon" />
      </button>
      <button aria-label="clear search" type="reset" className="clear-button">
        <img className="button-image" src={clearIcon} alt="clear icon" />
      </button>
    </form>
  );
}

export default Search;

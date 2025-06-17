// import React from "react";

// function Search(props) {
//   //props: onSearch, onClear

//   const handleSearch = (event) => {
//     event.preventDefault();
//     props.onSearch(event.target.value);
//   }

//   const handleClear = (event) => {
//     event.preventDefault();
//     props.onClear();
//   }

//   return (
//     <form className="searchForm" onSubmit={handleSearch} onReset={handleClear}>
//         <input className="searchInput" type="text" placeholder="search boards" />
//         <img className="searchButton" type="submit" src="src/assets/3844432_magnifier_search_zoom_icon.png" alt="search icon"/>
//         <img className="clearButton" type="reset" src="src/assets/8666736_x_circle_icon.png" alt="clear icon"/>
//     </form>
//   );
// }

// export default Search;

import React, { useRef } from "react";
import "./Search.css";

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
    <form className="searchForm" onSubmit={handleSearch} onReset={handleClear}>
      <input
        className="searchInput"
        type="text"
        placeholder="search boards"
        ref={inputRef}
      />
      <button type="submit" className="searchButton">
        <img className="buttonImage" src="src/assets/3844432_magnifier_search_zoom_icon.png" alt="search icon" />
      </button>
      <button type="reset" className="clearButton">
        <img className="buttonImage" src="src/assets/8666736_x_circle_icon.png" alt="clear icon" />
      </button>
    </form>
  );
}

export default Search;

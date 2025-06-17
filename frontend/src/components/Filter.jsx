import React from "react";
import "./Filter.css";

function Filter(props) {
    //props: onFilterClick(filter)

    const onClick = (event) => {
        props.onFilterClick(event.target.id);
    }

    return (
        <section className="filterButtonContainer">
            <button id="all" className="filterButton" onClick={onClick}>all</button>
            <button id="recent" className="filterButton" onClick={onClick}>recent</button>
            <button id="celebration" className="filterButton" onClick={onClick}>celebration</button>
            <button id="thank you" className="filterButton" onClick={onClick}>thank you</button>
            <button id="inspiration" className="filterButton" onClick={onClick}>inspiration</button>
        </section>
  );
}

export default Filter;

import React from "react";
import "./Filter.css";
import Filters from "../../enums.js";

function Filter(props) {
    //props: onFilterClick(filter)

    const onClick = (event) => {
        props.onFilterClick(event.target.id);
    }

    return (
        <section className="filter-button-container">
            <button aria-label="show all boards" id={Filters.ALL} className="filter-button" onClick={onClick}>all</button>
            <button aria-label="filter for recent" id={Filters.RECENT} className="filter-button" onClick={onClick}>recent</button>
            <button aria-label="filter for celebration" id={Filters.CELEBRATION} className="filter-button" onClick={onClick}>celebration</button>
            <button aria-label="filter for thank you" id={Filters.TY} className="filter-button" onClick={onClick}>thank you</button>
            <button aria-label="filter for inspiration" id={Filters.INSPO} className="filter-button" onClick={onClick}>inspiration</button>
        </section>
  );
}

export default Filter;

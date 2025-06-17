import React from "react";
import "./Board.css";

function Board(props) {
  //props: id, image, title, type, cards
  //cards: message, gif, upvotes


  return (
    <div className="board">
      <img className="board-image" src={props.image} alt={props.title} />
      <section className="board-info">
        <p className="board-title">{props.title}</p>
        <p className="board-type">{props.type}</p>
      </section>
    </div>
  );
}

export default Board;

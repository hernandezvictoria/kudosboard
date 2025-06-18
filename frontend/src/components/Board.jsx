import React from "react";
import "./Board.css";

function Board({id, image_path, title, type, author}) {


  return (
    <div className="board">
      <img className="board-image" src={image_path} alt={title} />
      <section className="board-info">
        <p className="board-title">{title}</p>
        <p className="board-type">{type}</p>
        <p className="board-author">{author}</p>
      </section>
    </div>
  );
}

export default Board;

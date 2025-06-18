import React from "react";
import "./Board.css";

function Board({onDeleteBoard, id, image_path, title, type, author}) {


  const handleDelete = (event) => {
    event.stopPropagation();
    onDeleteBoard(parseInt(id));
  }

  return (
    <div className="board">
      <img className="board-image" src={image_path} alt={title} />
      <section className="board-info">
        <p className="board-title">{title}</p>
        <p className="board-type">{type}</p>
        <p className="board-author">{author}</p>
      </section>
      <button className="delete-button" onClick={handleDelete}>🗑️</button>
    </div>
  );
}

export default Board;

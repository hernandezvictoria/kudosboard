import React from "react";
import { useNavigate } from "react-router-dom";
import "./Board.css";

function Board({ onDeleteBoard, id, image_path, title, type, author }) {
  const navigate = useNavigate();

  const handleDelete = (event) => {
    event.stopPropagation();
    onDeleteBoard(parseInt(id));
  };

  const handleBoardClick = () => {
    // use navigate to change the route without reloading the page
    navigate(`/board/${id}/${title}`);
  };

  return (
    <div className="board" onClick={handleBoardClick}>
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

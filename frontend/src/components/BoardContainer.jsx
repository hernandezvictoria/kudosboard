import React from "react";
import Board from "./Board.jsx";
import "./BoardContainer.css";

function BoardContainer({data, onDeleteBoard}) {
//data: [{id, image_path, title, type, author}]


  return (

    <div className="row">
    {
        data.map(obj => {
            return(<Board
                    key={obj.id}
                    onDeleteBoard={onDeleteBoard}
                    id={obj.id}
                    image_path={obj.image_path}
                    title={obj.title}
                    type={obj.type}
                    author={obj.author}/>);
        })
        }
    </div>
  );
}

export default BoardContainer;

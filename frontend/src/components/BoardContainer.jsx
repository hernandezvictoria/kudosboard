import React from "react";
import Board from "./Board.jsx";
import "./BoardContainer.css";

function BoardContainer(props) {
//props: data
//data: [{id, image, title, type, cards}]

  return (
    <div className="row">
    {
        props.data.map(obj => {
            return(<Board
                    key={obj.id}
                    image={obj.image}
                    title={obj.title}
                    type={obj.type}
                    cards={obj.cards}/>);
        })
        }
    </div>
  );
}

export default BoardContainer;

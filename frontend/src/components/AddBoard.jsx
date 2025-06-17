import React from "react";
import { useState } from 'react'
import "./AddBoard.css";

function AddBoard(props) {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    const getModal = () => {
        if (modalOpen) {
            return(
            <div className="modalOverlay" onClick={closeModal}>
                <div className="modal" onClick={(event) => event.stopPropagation()}>
                    <h2 className="modalTitle">create a new board</h2>
                    <div className="addForm">
                        <input type="text" className="nameInput" name="boardName" placeholder="title" required />
                        <select className="categoryInput" required>
                            <option value="default">select a category</option>
                            <option value="celebration">celebration</option>
                            <option value="thank you">thank you</option>
                            <option value="inspiration">inspiration</option>
                        </select>
                        <button className="submitButton" type="submit">create</button>
                    </div>
                </div>
            </div>)
        }
    }

    return (
        <div>

            <button className="addButton" onClick={openModal}>
                <img className="addImage" src="src/assets/Microsoft-Fluentui-Emoji-Mono-Plus.512.png" alt="create new board icon"/>
            </button>
            {getModal()}
            
        </div>
    );
}

export default AddBoard;

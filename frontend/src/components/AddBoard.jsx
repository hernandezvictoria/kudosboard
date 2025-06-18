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

    const handleAddBoard = (event) => {
        event.preventDefault();
        
    }

    const getModal = () => {
        if (modalOpen) {
            return(
            <div className="modal-overlay" onClick={closeModal}>
                <div className="modal" onClick={(event) => event.stopPropagation()}>
                    <h2 className="modal-title">create a new board</h2>
                    <form className="add-form" onSubmit={handleAddBoard}>
                        <input type="text" className="name-input" name="board-name" placeholder="title *" required />
                        <select className="category-input" required>
                            <option value="default">select a category *</option>
                            <option value="celebration">celebration</option>
                            <option value="thank you">thank you</option>
                            <option value="inspiration">inspiration</option>
                        </select>
                        <input type="text" className="author-input" name="board-author" placeholder="author" />
                        <input type="text" className="image-input" name="board-image" placeholder="image url" />
                        <button aria-label="submit new board" className="submit-button" type="submit">create</button>
                    </form>
                </div>
            </div>)
        }
    }

    return (
        <div>

            <button aria-label="add new Board" className="add-button" onClick={openModal}>
                <img className="add-image" src="src/assets/Microsoft-Fluentui-Emoji-Mono-Plus.512.png" alt="create new board icon"/>
            </button>
            {getModal()}

        </div>
    );
}

export default AddBoard;

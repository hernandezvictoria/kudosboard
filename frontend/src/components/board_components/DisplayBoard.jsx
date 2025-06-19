import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Post from './Post';

function DisplayBoard() {
    const { id, title } = useParams(); // Access the :id parameter
    const [displayedData, setDisplayedData] = useState([]);
    const [error, setError] = useState(null);

    // Fetch the data for the specific board using the id
    const displayAllData = () => {
        fetch("http://localhost:3000/posts/" + id)
        .then((response) => {return response.json()})
        .then((data) => setDisplayedData(data))
        .catch(error => setError(error));
    };

    useEffect(() => {
        displayAllData();
    }, []); // Only run this on mount

    const onDeletePost = (id) => {

    }


    if(error){
        return <h1>Something went wrong 🫤 </h1>
    }

    else{
        return (
            <div className="body">
                <Link to="/">replace with back image</Link>

                <h2>{title}</h2>

                <div className="row">
                {
                    displayedData.map(obj => {
                        return(
                        <Post
                            key={obj.id}
                            id={obj.id}
                            onDeletePost={onDeletePost}
                            board_id={obj.board_id}
                            message={obj.message}
                            gif_path={obj.gif_path}
                            author={obj.author}
                            pinned={obj.pinned}
                            upvotes={obj.upvotes}/>);})
                }
                </div>
            </div>
        );
    }

}

export default DisplayBoard;

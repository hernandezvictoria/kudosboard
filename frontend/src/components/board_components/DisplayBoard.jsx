import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Post from './Post';
import AddPost from './AddPost';
import backIcon from '../../assets/icons8-back-60.png'
import './DisplayBoard.css'

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
    }, [displayedData]); // Only run this on mount

    const onDeletePost = (id) => {
        fetch(`http://localhost:3000/posts/delete-post/${id}`, {method: 'DELETE'})
        .then((response) => response.json())
        .then((deletedPost) => setDisplayedData(displayedData.filter((post) => post.id !== deletedPost.id)))
        .catch((error) => console.error(setError(error)));
    }

    const onUpvotePost = (id) => {
        fetch(`http://localhost:3000/posts/upvote-post/${id}`, { method: 'PUT' })
            .then((response) => response.json())
            .then((upvotedPost) => {
                setDisplayedData(
                    displayedData.map((post) =>
                        post.id === id ? upvotedPost : post
                    )
                );
            })
            .catch((error) => console.error(setError(error)));
    };

    const onTogglePin = (id) => {
        fetch(`http://localhost:3000/posts/toggle-pin/${id}`, { method: 'PUT' })
            .then((response) => response.json())
            .then((updatedPost) => {
                setDisplayedData(
                    displayedData.map((post) =>
                        post.id === id ? updatedPost : post
                    )
                );
            })
            .catch((error) => console.error(setError(error)));
    }

    const onAddPost = (newPost) => {
        fetch(`http://localhost:3000/posts/${id}/add-post`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newPost),
        })
        .then((response) => response.json())
        .then((newData) => setDisplayedData([...displayedData, newData]))
        .catch((error) => console.error(setError(error)));
    };




    if(error){
        return <h1>Something went wrong 🫤 </h1>
    }

    else{
        return (
            <div className="body">
                <Link to="/"><img className="back-icon" src={backIcon} alt="back icon" aria-label="return to home"/></Link>

                <h2>{title}</h2>

                <div className="row">
                {
                    displayedData.map(obj => {
                        return(
                        <Post
                            key={obj.id}
                            id={obj.id}
                            onTogglePin={onTogglePin}
                            onUpvotePost={onUpvotePost}
                            onDeletePost={onDeletePost}
                            board_id={obj.board_id}
                            message={obj.message}
                            gif_path={obj.gif_path}
                            author={obj.author}
                            pinned={obj.pinned}
                            upvotes={obj.upvotes}/>);})
                }
                </div>

                <AddPost onAddPost={onAddPost}/>
            </div>
        );
    }

}

export default DisplayBoard;

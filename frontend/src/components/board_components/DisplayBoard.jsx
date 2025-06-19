import { Link, useParams } from 'react-router-dom';

function DisplayBoard() {
    const { id } = useParams(); // Access the :id parameter

    return (
        <div>
            <h2>Board ID: {id}</h2> {/* Display the board ID */}
            <Link to="/">replace with back image</Link>
        </div>
    );
}

export default DisplayBoard;

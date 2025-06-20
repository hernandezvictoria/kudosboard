import { useEffect, useState } from 'react'
import './Home.css'
import BoardContainer from './BoardContainer.jsx'
import Search from './Search.jsx'
import Filter from './Filter.jsx'
import AddBoard from './AddBoard.jsx'


function Home() {

  const [displayedData, setDisplayedData] = useState([]);
  const [error, setError] = useState(null);
  const BASE_URL = "https://kudosboard-backend.onrender.com"

  const displayAllData = () => {
    fetch(`${BASE_URL}/boards`)
    .then((response) => {return response.json()})
    .then((data) => setDisplayedData(data))
    .catch(error => setError(error));
  };

  useEffect(() => {
    displayAllData();
  }, []); // show all boards on the first render

  const onFilterClick = (filter) => {
    fetch(`${BASE_URL}/boards/${filter}`)
    .then((response) => {return response.json()})
    .then((data) => setDisplayedData(data))
    .catch(error => console.error(setError(error)));
  }

  const onSearch = (searchTerm) => {
    fetch(`${BASE_URL}/boards/search/${searchTerm}`)
    .then((response) => {return response.json()})
    .then((data) => setDisplayedData(data))
    .catch(error => console.error(setError(error)));
  }

  const onAddBoard = (newBoard) => {
    fetch(`${BASE_URL}/boards/add-board`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBoard),
    })
      .then((response) => response.json())
      .then((newData) => setDisplayedData([...displayedData, newData]))
      .catch((error) => console.error(setError(error)));
  };

  const onDeleteBoard = (id) => {
    fetch(`${BASE_URL}/boards/delete-board/${id}`, {method: 'DELETE'})
    .then((response) => response.json())
    .then((deletedBoard) => setDisplayedData(displayedData.filter((board) => board.id !== deletedBoard.id)))
    .catch((error) => console.error(setError(error)));
  };


  const onClear = () => {
    displayAllData();
  }

  if(error){
    return <h1>Something went wrong 🫤 </h1>
  }
  else{
    return (
      <div className="App">

        <header>
          <Search onSearch={onSearch} onClear={onClear}/>
          <Filter onFilterClick={onFilterClick}/>
        </header>

        <section className="body">
          <section className="boardContainer">
            <BoardContainer data={displayedData} onDeleteBoard={onDeleteBoard}/>
          </section>
        </section>

        <section className="add-board">
          <AddBoard onAddBoard={onAddBoard}/>
        </section>

      </div>
    )
  }

}


export default Home

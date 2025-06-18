import { useEffect, useState } from 'react'
import './App.css'
import BoardContainer from './components/BoardContainer.jsx'
import Search from './components/Search.jsx'
import Filter from './components/Filter.jsx'
import AddBoard from './components/AddBoard.jsx'


function App() {

  const [displayedData, setDisplayedData] = useState([]);
  const [error, setError] = useState(null);

  const displayAllData = () => {
    fetch('http://localhost:3000/boards')
    .then((response) => {return response.json()})
    .then((data) => setDisplayedData(data))
    .catch(error => setError(error));
  };

  useEffect(() => {
    displayAllData();
  }, []); // show all boards on the first render

  const onFilterClick = (filter) => {
    fetch(`http://localhost:3000/boards/${filter}`)
    .then((response) => {return response.json()})
    .then((data) => setDisplayedData(data))
    .catch(error => console.error(setError(error)));
  }

  const onSearch = (searchTerm) => {
    fetch(`http://localhost:3000/boards/search/${searchTerm}`)
    .then((response) => {return response.json()})
    .then((data) => setDisplayedData(data))
    .catch(error => console.error(setError(error)));
  }

  const onAddBoard = (newBoard) => {
    fetch(`http://localhost:3000/boards/add-board`, {
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
          <h1>kudos board</h1>
          <Search onSearch={onSearch} onClear={onClear}/>
          <Filter onFilterClick={onFilterClick}/>


        </header>

        <section className="body">
          <section className="boardContainer">
            <BoardContainer data={displayedData}/>
          </section>
        </section>

        <section className="add-board">
          <AddBoard onAddBoard={onAddBoard}/>
        </section>

      </div>
    )
  }

}


export default App

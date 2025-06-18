import { useEffect, useState } from 'react'
import './App.css'
import BoardContainer from './components/BoardContainer.jsx'
import Search from './components/Search.jsx'
import Filter from './components/Filter.jsx'
import AddBoard from './components/AddBoard.jsx'

const placeholderData = [
  {
    "id": 1,
    "image": "src/assets/placeholder.jpeg",
    "title": "Title 1",
    "type": "thank you",
    "cards": [
      {
        "message": "Message 1",
        "gif": "src/assets/placeholder.gif",
        "upvotes": 0
      },
      {
        "message": "Message 1",
        "gif": "src/assets/placeholder.gif",
        "upvotes": 0
      }
    ]
  },
  {
    "id": 2,
    "image": "src/assets/placeholder.jpeg",
    "title": "Title 2",
    "type": "celebration",
    "cards": [
      {
        "message": "Message 1",
        "gif": "src/assets/placeholder.gif",
        "upvotes": 0
      },
      {
        "message": "Message 1",
        "gif": "src/assets/placeholder.gif",
        "upvotes": 0
      }
    ]
  },
  {
    "id": 3,
    "image": "src/assets/placeholder.jpeg",
    "title": "Title 3",
    "type": "thank you",
    "cards": [
      {
        "message": "Message 1",
        "gif": "src/assets/placeholder.gif",
        "upvotes": 0
      },
      {
        "message": "Message 1",
        "gif": "src/assets/placeholder.gif",
        "upvotes": 0
      }
    ]
  },
  {
    "id": 4,
    "image": "src/assets/placeholder.jpeg",
    "title": "Title 4",
    "type": "inspiration",
    "cards": [
      {
        "message": "Message 1",
        "gif": "src/assets/placeholder.gif",
        "upvotes": 0
      },
      {
        "message": "Message 1",
        "gif": "src/assets/placeholder.gif",
        "upvotes": 0
      }
    ]
  },
  {
    "id": 5,
    "image": "src/assets/placeholder.jpeg",
    "title": "Title 5",
    "type": "thank you",
    "cards": [
      {
        "message": "Message 1",
        "gif": "src/assets/placeholder.gif",
        "upvotes": 0
      },
      {
        "message": "Message 1",
        "gif": "src/assets/placeholder.gif",
        "upvotes": 0
      }
    ]
  },
  {
    "id": 6,
    "image": "src/assets/placeholder.jpeg",
    "title": "Title 6",
    "type": "thank you",
    "cards": [
      {
        "message": "Message 1",
        "gif": "src/assets/placeholder.gif",
        "upvotes": 0
      },
      {
        "message": "Message 1",
        "gif": "src/assets/placeholder.gif",
        "upvotes": 0
      }
    ]
  },
  {
    "id": 7,
    "image": "src/assets/placeholder.jpeg",
    "title": "Title 7",
    "type": "celebration",
    "cards": [
      {
        "message": "Message 1",
        "gif": "src/assets/placeholder.gif",
        "upvotes": 0
      },
      {
        "message": "Message 1",
        "gif": "src/assets/placeholder.gif",
        "upvotes": 0
      }
    ]
  },
  {
    "id": 8,
    "image": "src/assets/placeholder.jpeg",
    "title": "Title 8",
    "type": "inspiration",
    "cards": [
      {
        "message": "Message 1",
        "gif": "src/assets/placeholder.gif",
        "upvotes": 0
      },
      {
        "message": "Message 1",
        "gif": "src/assets/placeholder.gif",
        "upvotes": 0
      }
    ]
  }
];

function App() {

  const [displayedData, setDisplayedData] = useState([])
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
          <AddBoard />
        </section>

      </div>
    )
  }

}


export default App

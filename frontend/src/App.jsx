import { useState } from 'react'
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

  const [allData, setAllData] = useState(placeholderData)
  const [displayedData, setDisplayedData] = useState(placeholderData)

  const onFilterClick = (filter) => {
    if (filter === 'all') {
      setDisplayedData(allData);
    }
    else if(filter === 'recent'){
      setDisplayedData(allData.filter(item => item.id > allData.length - 6));
    }
    else if(filter === 'thank you') {
      setDisplayedData(allData.filter(item => item.type === 'thank you'));
    }
    else if(filter === 'celebration') {
      setDisplayedData(allData.filter(item => item.type === 'celebration'));
    }
    else{
      setDisplayedData(allData.filter(item => item.type === 'inspiration'));
    }
  }

  const onSearch = (searchTerm) => {
    console.log(searchTerm);
    setDisplayedData(allData.filter(item => item.title.toString().toLowerCase().includes(searchTerm.toString().toLowerCase())));
  }

  const onClear = () => {
    setDisplayedData(allData);
  }

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

      <section className="addBoard">
        <AddBoard />
      </section>

    </div>
  )
}

export default App

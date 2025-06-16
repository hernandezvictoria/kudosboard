import { useState } from 'react'
import './App.css'
import BoardContainer from './components/BoardContainer.jsx'

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


  return (
    <div className="App">
      <header>

        <h1>kudos board</h1>

        <form className="searchForm">
          <input className="searchInput" type="text" placeholder="search boards" />
          <img className="searchButton" src="src/assets/3844432_magnifier_search_zoom_icon.png" alt="search icon"/>
          <img className="clearButton" src="src/assets/8666736_x_circle_icon.png" alt="clear icon"/>
        </form>

        <section className="filterButtonContainer">
          <button id="allButton" className="filterButton">all</button>
          <button className="filterButton">recent</button>
          <button className="filterButton">celebration</button>
          <button className="filterButton">thank you</button>
          <button className="filterButton">inspiration</button>
        </section>
      </header>

      <section className="body">
        <section className="boardContainer">
          <BoardContainer data={placeholderData}/>
        </section>
      </section>

    </div>
  )
}

export default App

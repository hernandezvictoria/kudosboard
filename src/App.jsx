import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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

    </div>
  )
}

export default App

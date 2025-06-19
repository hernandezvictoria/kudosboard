import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/home_components/Home'
import DisplayBoard from './components/board_components/DisplayBoard'


function App() {

    return (
        <Router>
            <header>
               <h1>kudos board</h1>
            </header>

            <main>
                <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/board/:id" element={<DisplayBoard/>} />
                </Routes>
          </main>

            <footer>
            <p className="footer">made with ♡ by victoria hernandez</p>
            </footer>
        </Router>

      )

}


export default App

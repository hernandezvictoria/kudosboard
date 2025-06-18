import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'


function App() {

    return (
        <Router>
            <header>
               <h1>kudos board</h1>
            </header>

            <main>
                <Routes>
                <Route path="/" element={<Home/>} />
                </Routes>
          </main>

            <footer>
            <p className="footer">made with ♡ by victoria hernandez</p>
            </footer>
        </Router>

      )

}


export default App

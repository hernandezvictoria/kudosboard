import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/home_components/Home'
import DisplayBoard from './components/board_components/DisplayBoard'


function App() {
    // const [darkMode, setDarkMode] = useState(false);



    const [darkMode, setDarkMode] = useState(() => {
        // Load preference from localStorage if available
        return localStorage.getItem("dark-mode") === "true";
    });

    useEffect(() => {
        // Add or remove the dark-mode class on the body
        if (darkMode) {
            document.body.classList.add("dark-mode");
        } else {
          document.body.classList.remove("dark-mode");
        }
        // Save preference
        localStorage.setItem("dark-mode", darkMode);
      }, [darkMode]);

      const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return (
        <>


          <Router>
              <div className="all">
                <section>
                <button onClick={toggleDarkMode} className="toggle-dark-button">{darkMode? "light mode": "dark mode"}</button>
                  <header>
                    <h1>kudos board</h1>
                  </header>

                  <main>
                      <Routes>
                      <Route path="/" element={<Home/>} />
                      <Route path="/board/:id/:title" element={<DisplayBoard/>} />
                      </Routes>
                  </main>
                </section>

                <footer>
                  <p className="footer">made with ♡ by victoria hernandez</p>
                </footer>
              </div>
          </Router>
        </>

      )

}


export default App

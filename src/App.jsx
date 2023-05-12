import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Header from "./components/Header"
import Coins from "./components/Coins"
import Exchange from "./components/Exchange"
import CoinDetails from "./components/CoinDetails"
import Home from "./components/Home"



function App() {
  

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element= {<Home />}/>
        <Route path="/coins" element= {<Coins />}/>
        <Route path="/exchanges" element= {<Exchange />}/>
        <Route path="/coin/:id" element= {<CoinDetails />}/>
        
      </Routes>
    </Router>
   
  )
}

export default App

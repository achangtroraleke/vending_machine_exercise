import React from "react";
import { Link } from "react-router-dom";
import "./App.css"
import "./Home.css"

const Home = () => {
    return(
        <div id="HomePage" className="flex gap">
            <div className="container transparent"><h2>HELLO I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?</h2></div>
            <div className="container transparent">
            <nav className="flex-column gap">
                <Link to='/soda'>Soda</Link>
                <Link to='/chips'>Chips</Link>
                <Link to='/sardines'>Fresh Sardines</Link>
            </nav>
            </div>
          
        </div>
    
    )
}

export default Home;
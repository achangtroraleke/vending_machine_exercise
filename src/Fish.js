import React from "react";
import "./Fish.css"
import "./App.css"
import { Link } from "react-router-dom";

const Fish = () =>{
    return(
        <div id="fish-page">
            <div className="container flex-column transparent gap">
                <h3>YOU DON'T EAT THE SARDINES. THE SARDINES, THEY EAT YOU!</h3>
                <Link to={'/'}>GO BACK</Link>
            </div>
        </div>
    )
}

export default Fish;
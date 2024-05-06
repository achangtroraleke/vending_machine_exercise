import React from "react";
import { Link } from "react-router-dom";
import './App.css'
import './Soda.css'
import can from './images/coke_can-min.png'
const Soda = () =>{
    return(
        <div id="soda-page" className="flex fit container transparent">
            <img id="soda-img" src={can} alt="soda-can"/>
            <div className="flex-column gap">
                <h3>OMG SUGARRRR</h3>
                <Link to={'/'}><h3>Go Back</h3></Link>
            </div>
            <img id="soda-img" src={can} alt="soda-can"/>
        </div>
    )
}

export default  Soda;
import React, {useState} from "react";
import './App.css'
import './Chips.css'
import Chips from "./Chips";
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";

function getRandom(min = 0, max = 100){
    return Math.random() * (max - min) + min;
}

const ChipsPage = () =>{
    const [chips, setChips] = useState([])
    const addChips = () =>{
        setChips(chips => [...chips, {x: getRandom(), y:getRandom(), id:uuidv4()}])
       
    }
    return(
        <div id="chip-page" className="container flex-column transparent gap">
            <h3 className="no-margin">BAGS EATEN: {chips.length}</h3>
            <button onClick={addChips}>Click Me</button>
        {chips.map(({id,x,y})=>{
            return(
                <Chips key={id} x={x} y = {y}/>
            )
        })}
        <Link to={'/'}>GO BACK</Link>
        </div>
    )
}

export default ChipsPage;
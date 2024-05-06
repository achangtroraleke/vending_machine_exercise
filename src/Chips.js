import React from "react";
import chips from "./images/chips_img-min.png"
import './Chips.css'
const Chips = ({x,y}) =>{
    return(
        <div id="chip-container"
            style={{
                position:'absolute',
                top:`${y}dvh`,
                left:`${x}dvw`
            }}
        >        
        <img src={chips} alt="bag of chips"/>
            
        </div>
    )
}

export default Chips
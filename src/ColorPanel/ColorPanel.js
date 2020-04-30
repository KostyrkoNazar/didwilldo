import React from "react";
import './styles.css'

function ColorPanel({setColor,color}){

    return(
        <div className='colorPanel'>

            <div style={{backgroundColor:color}}
                    onClick={()=>setColor(color)}/>

        </div>
    )
}

export default ColorPanel;
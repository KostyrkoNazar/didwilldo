import React from "react";
import './styles.css'

const availableColors = ['yellow', 'red','green','blue'];

function ColorPanel({setColor}){

    const colorPanel = availableColors.map((color,index)=>{
        return <div style={{backgroundColor:color}} key={index}/>
    })

    return(
        <div className='colorPanel'>
            {colorPanel}
        </div>
    )
}

export default ColorPanel;
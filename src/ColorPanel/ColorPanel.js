import React, {useEffect, useState} from "react";
import './styles.css'

const availableColors = ['yellow', 'red','green','blue',''];

function ColorPanel({setColor, defaultColor, show, panel}){

    const colorPanel = availableColors.map((color,index)=>{
        return <div style={{backgroundColor:color}}
                    key={index}
                    onClick={()=>setColor(color)}
        />
    })


    const colorBox = <div style={{backgroundColor: defaultColor}}
                          onClick={()=>show(colorPanel)}
    />


    return(
        <div className='colorPanel'>
            {colorBox}

            {panel}

        </div>
    )
}

export default ColorPanel;
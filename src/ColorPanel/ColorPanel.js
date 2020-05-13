import React, {useEffect, useState} from "react";
import {COLOR_LIST} from "../appConfig";
import './styles.css'


function ColorPanel({setColor, defaultColor, show, panel}){

    const colorPanel = COLOR_LIST.map((color,index)=>{
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
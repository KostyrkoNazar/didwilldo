import React, {useEffect, useState} from "react";
import './styles.css'

const availableColors = ['yellow', 'red','green','blue', 'white'];

function ColorPanel({setColor}){

    const [panelIsVisible, setPanelIsVisible] = useState(true)
    const [selectedColor, setSelectedColor]=useState('')

    return(
        <div className='colorPanel'>
            { panelIsVisible === true ? availableColors.map((color,index)=>{
                return <div style={{backgroundColor:color}}
                            key={index}
                            onClick={()=>{ setColor(color)
                                            setSelectedColor(color)
                                            setPanelIsVisible(false) }
                            }
                />
            }) :  <div style={{backgroundColor: selectedColor}}
                       onClick={()=>setPanelIsVisible(true)} /> }


        </div>
    )
}

export default ColorPanel;
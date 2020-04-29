import React from "react";
import './styles.css'

const availableColors = ['yellow', 'red','green','blue'];

function ColorPanel({setColor}){

    return(
        <div className='colorPanel'>

            {availableColors.map((colors, index)=>
                <div onClick={() => setColor(colors)}
                     style={{backgroundColor: colors}}/>)
            }

        </div>
    )
}

export default ColorPanel;
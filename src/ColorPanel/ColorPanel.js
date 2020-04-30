import React from "react";
import './styles.css'

function ColorPanel({setColor,color}){

    return(
        <div className='colorPanel'>

            <div style={{backgroundColor:color}}
                    onClick={()=>setColor(color)}/>
           {/* {availableColors.map((colors, index)=>
                <div key={index}
                     onClick={() => setColor(colors)}
                     style={{backgroundColor: colors}}/>)
            }
*/}
        </div>
    )
}

export default ColorPanel;
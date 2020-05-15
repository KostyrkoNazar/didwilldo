import React, { useState } from "react";
import PropTypes from "prop-types";
import { COLOR_LIST } from "../appConfig";
import "./styles.css";

function ColorPanel({ setColor }) {
   const [panelIsVisible, setPanelIsVisible] = useState(true);
   const [selectedColor, setSelectedColor] = useState("white");

   return (
      <div className="colorPanel">
         {panelIsVisible === true ? (
            COLOR_LIST.map((color, index) => {
               return (
                  <div
                     style={{ backgroundColor: color }}
                     key={index}
                     onClick={() => {
                        setColor(color);
                        setSelectedColor(color);
                        setPanelIsVisible(false);
                     }}
                  />
               );
            })
         ) : (
            <div style={{ backgroundColor: selectedColor }} onClick={() => setPanelIsVisible(true)} />
         )}
      </div>
   );
}

ColorPanel.propTypes = {
   setColor: PropTypes.func,
};

export default ColorPanel;

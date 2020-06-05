import React from "react";
import "./style.css";
import PropTypes from "prop-types";

function TabBarButton({ id, label, isSelected, onClick }) {
   return (
      <div key={id} className={"tabBarButton" + (isSelected ? " isSelected" : "")} onClick={onClick}>
         <button>{label}</button>
      </div>
   );
}

TabBarButton.propTypes = {
   id: PropTypes.string,
   label: PropTypes.string,
   isSelected: PropTypes.bool,
   onClick: PropTypes.func,
};

export default TabBarButton;

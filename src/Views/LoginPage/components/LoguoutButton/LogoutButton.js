import React from "react";
import PropTypes from "prop-types";

const LogoutButton = ({ onSubmit }) => {
   return (
      <div className="logoutButton">
         <button onClick={onSubmit}>Log out</button>
      </div>
   );
};

LogoutButton.propTypes = {
   onSubmit: PropTypes.func,
};

export default LogoutButton;

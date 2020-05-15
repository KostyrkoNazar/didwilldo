import React, { useState } from "react";

function TodoFilter({ show }) {
  const [isFiltered, setIsFiltered] = useState(false);

  const setFiltered = (value) => {
    setIsFiltered(!value);
    show(value);
  };

  return (
    <div>
      <input
        type="checkbox"
        value={isFiltered}
        onChange={(e) => setFiltered(e.target.value)}
      />

      <label>Show done</label>
    </div>
  );
}

export default TodoFilter;

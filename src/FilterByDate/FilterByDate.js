import React, { useState } from "react";
import moment from "moment";

const currentDate = moment().format("DD-MM-YYYY");

/*const min = now.add(1, "d").format("YYYY-MM-DD");
const max = now.add(3, "M").subtract(1, "d").format("YYYY-MM-DD");*/

const FilterByDate = () => {
   const [selectedDate, setSelectedDate] = useState(currentDate);
   const [filterEnabled, setFilterEnabled] = useState(false);

   return (
      <div>
         <input type="date" name="dateFilter" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />

         <input type="checkbox" value={filterEnabled} onChange={(e) => setFilterEnabled(!e.target.value)} />
      </div>
   );
};

export default FilterByDate;

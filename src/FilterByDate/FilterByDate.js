import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { connect } from "react-redux";

import { filterByDate } from "../actions";

/*const min = now.add(1, "d").format("YYYY-MM-DD");
const max = now.add(3, "M").subtract(1, "d").format("YYYY-MM-DD");*/

const FilterByDate = ({ filterByDate }) => {
   const currentDate = moment().format("YYYY-MM-DD");

   const [selectedDate, setSelectedDate] = useState(currentDate);
   const [filterEnabled, setFilterEnabled] = useState(false);

   useEffect(() => {
      if (filterEnabled === true) {
         filterByDate(moment(selectedDate).format("DD-MM-YYYY"));
      } else {
         filterByDate(null);
      }
   }, [selectedDate, filterEnabled, filterByDate, currentDate]);

   return (
      <div>
         <input type="date" name="dateFilter" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />

         <input type="checkbox" value={filterEnabled} onClick={() => setFilterEnabled(!filterEnabled)} />
      </div>
   );
};

FilterByDate.propTypes = {
   filterByDate: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
   filterByDate: (selectedDate) => dispatch(filterByDate(selectedDate)),
});

export default connect(null, mapDispatchToProps)(FilterByDate);

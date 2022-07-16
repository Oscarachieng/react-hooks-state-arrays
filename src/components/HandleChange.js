import React, { useState } from "react";

function HandleChange () {
    const [filterBy, setFilterBy] = useState("All");
    
    function handleFilterChange (event){
        setFilterBy(event.target.value)
    }

    return (
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="American">American</option>
          <option value="Sichuan">Sichuan</option>
          <option value="Thai">Thai</option>
          <option value="Mexican">Mexican</option>
        </select>
    )
}
export default HandleChange
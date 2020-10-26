import React, { useContext } from "react";
import Body from "./Body";

const Table = ({developerState,handleSort}) => {

  return (

    <div className="table mt-5">
      <table
        id="table"
        className="table table-striped table-hover table-condensed"
      >
        <thead>
          <tr>
            {developerState.headings.map(({ name, width }) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    handleSort(name);
                  }}
                >
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>

        <Body filteredUsers={developerState.filteredUsers}/>
      </table>
    </div>
  );
}

export default Table;

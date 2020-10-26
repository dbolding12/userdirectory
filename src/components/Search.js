import React from "react";

const Search = ({handleSearchChange}) => {

  return (
    <div className="search">
      <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="">
              Search for Employee Data
            </span>
          </div>
          <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Employee Name"
          aria-label="Search"
          onChange={e => handleSearchChange(e)}
        />
        </div>
    </div>
  );
}
export default Search;

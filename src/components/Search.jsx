
import React from "react";

function Search({ onSearch }) {
  function handleSearch(event) {
    const searchValue = event.target.value;

    onSearch(searchValue);
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>

      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;


import React, { useState } from 'react';
import './SearchBar.css'; 

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };
  

  return (
    <div className="SearchBar">
      <input
        type="text"
        className="form-control"
        placeholder="Search by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
       <button className="btn btn-primary btn-sm btn-search" onClick={handleSearch}>
          Filter
        </button>
    </div>
  );
}

export default SearchBar;

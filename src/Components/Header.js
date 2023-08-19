import React from 'react';
import './Header.css'; 
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './SearchBar';

function Header({onAddEmployee , onSearch}) {
    const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };
    

  return (
    <header className="App-header">
        <div className="search-bar">

       <SearchBar onSearch={onSearch} />
        <button className="btn btn-primary btn-sm btn-add-employee" onClick={onAddEmployee}>Add</button>
      

        </div>
       
      
    </header>
  );
}

export default Header;

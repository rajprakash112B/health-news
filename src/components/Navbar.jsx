import React from 'react';

function Navbar({ onSearch }) {
  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      onSearch(event.target.value);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">Medpulse News</div>
      <input 
        type="text" 
        placeholder="Search..." 
        onKeyDown={handleSearch} 
        className="search-bar"
      />
    </nav>
  );
}

export default Navbar;

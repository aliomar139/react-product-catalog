import React from "react";

function SearchBar({ value, onChange, placeholder, onSelectChange }) {
  return (
    <div className="search-bar">
      <select onChange={onSelectChange} className="search-select">
        <option value="">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Audio">Audio</option>
        <option value="Books">Books</option>
      </select>

      <input
        className="search-input"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={() => console.log("Search Focused")}
      />
    </div>
  );
}

export default SearchBar;

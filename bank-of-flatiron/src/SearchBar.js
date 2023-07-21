import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div>
      <h2>Search Transactions</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by description"
      />
    </div>
  );
};

export default SearchBar;

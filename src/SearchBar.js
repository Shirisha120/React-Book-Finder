import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    if (input.trim() !== '') {
      onSearch(input);
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search for books..."
        className="border p-2 w-full rounded pl-10"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
      
        onClick={handleSearch}
      
        // 🔍
     
      />
      
      {/* <button
        onClick={handleSearch}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search
      </button> */}
    </div>
  );
};

export default SearchBar;

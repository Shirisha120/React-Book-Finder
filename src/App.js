import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import BookList from './BookList';
import './index.css'; 

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchTerm) {
      fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(searchTerm)}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.docs.length === 0) {
            setError('No books found');
          } else {
            setError(null);
            setBooks(data.docs);
          }
        })
        .catch(() => setError('An error occurred while fetching data'));
    }
  }, [searchTerm]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Book Finder</h1>
      <SearchBar onSearch={setSearchTerm} />
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div style={{ marginTop: '2rem' }}>
        <BookList books={books} />
      </div>
    </div>


  );
}

export default App;

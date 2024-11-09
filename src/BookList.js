import React from 'react';

const BookList = ({ books }) => {
    return (
       
        <div className="flex justify-center items-center min-h-screen">
           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl w-full">
                {books.map((book) => (
                    <div key={book.key} className="p-4 border rounded shadow-md flex items-start">
                        <div className="flex-shrink-0 w-1/4">
                            {book.cover_i ? (
                                <img
                                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                                    alt={book.title}
                                    className="mb-2 w-full h-auto rounded"
                                />
                            ) : (
                                <div className="mb-2 bg-gray-300 h-48 flex items-center justify-center rounded">
                                    No Image
                                </div>
                            )}
                        </div>
                        <div className="ml-4 flex-grow">
                            <h2 className="font-bold text-lg">{book.title}</h2>
                            <p className="text-sm text-gray-600">Author: {book.author_name?.join(', ')}</p>
                            <p className="text-sm text-gray-500">Published: {book.first_publish_year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookList;

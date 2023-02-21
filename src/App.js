import { useState } from 'react';
import BookCreate from './Components/BookCreate';

function App() {
    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        const updatedBooks = [
            ...books,
            // { id: 123, title: title } The following line is the same
            // { id: 123, title }
            {
                id: Math.round(Math.random() * 9999),
                title,
            },
        ];
        setBooks(updatedBooks);
    };

    return <div>
        {books.length}
        <BookCreate onCreate={createBook} />
    </div>;
}

export default App;
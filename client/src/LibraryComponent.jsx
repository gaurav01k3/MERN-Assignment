import React, { useEffect, useState } from 'react'
import axios from 'axios'

const LibraryComponent = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        const fetchBooks = async () => {
            const { data } = await axios.get('http://localhost:5000/library/books')
            setBooks(data)
            console.log(data);
        }

        fetchBooks();
    }, [])


    return (
        <>
            <h1 style={{ marginLeft: "20px" }}>Library</h1>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {
                    books.map((_book) => {
                        return <div style={{ border: '2px solid', width: 'max-content', margin: "20px", padding: "20px", display: "flex", flexDirection: 'column' }}>
                            <div>Book Name : {_book.BookName}</div>
                            <div>No of copies available : {_book.NumberOfCopies}</div>
                            <button style={{ marginTop: "20px" }}>Issue</button>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default LibraryComponent
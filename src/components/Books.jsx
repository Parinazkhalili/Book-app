
import {books} from "../constants/mockData"
import React from 'react'
import BookCard from "./BookCard"

function Books() {
    
    return (
        <div>
            <div>{books.map((book) => (<BookCard  key={book.id} data={book}/>))}</div>
            <div></div>
        </div>
    )
}

export default Books

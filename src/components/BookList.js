import React, { useState } from 'react'
import { books } from '../util'
import BookInfo from './BookInfo'

const BookList = () => {

    const [ bookList, setBookList ] = useState(books)

    const deleteBook = (id) => {
        const newBookList = bookList.filter( ({_id}) => _id !== id)
        setBookList(newBookList)        
    }


    return (
        <div className='booklist__container'>
            {
                bookList.map(({_id, author, title, img}) => (
                    <BookInfo 
                        id={_id}
                        author={author}
                        title={title}
                        img={img}
                        onClick={()=> deleteBook(_id)}
                    />
                ))
            }
        </div>
    )
}

export default BookList

import React from 'react'

const BookInfo = ({id, author, title, img, ...props}) => {
    return (
        <div key={id} className='bookinfo__container'>
            <img src={img} alt={title}/>
            <h4>{title}</h4>
            <h5>{author}</h5>
            <button onClick={props.onClick}>delete</button>
        </div>
    )
}

export default BookInfo

import React from 'react'
import BookList from './components/BookList';
import ReactPlayground from './components/ReactPlayground'

const App = () => {
    return (
        <div className='app__container'>
            <BookList />
            <h2>Github thingy</h2>
            <ReactPlayground />
        </div>)
}

export default App

import React, { useState, useEffect } from 'react'
import './ReactPlayground.css'

const ReactPlayground = () => {
    
    const [ isLoading, setIsLoading ] = useState(true)
    const [ isError, setIsError ] = useState(false)
    const [ users, setUsers ] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const url = 'https://api.github.com/users'
            const res = await fetch(url)
            return res
        }

        getUsers()
        .then( res => {
            if(res.status >= 200 && res.status <= 299){
                return res.json()
            }else{
                setIsLoading(false)
                setIsError(true)
            }
        })
        .then( users => {
            setIsLoading(false)
            setUsers(users)
        })
        .catch(err => console.log(err))
    }, [])

    return isLoading 
        ? (
            <h5>Loading...</h5>  
          )
        : isError
        ? (
            <h5>Not found</h5>
          )
        : !users.length
        ? (
            <div key={users.id} className='user'>
                <img src={users.avatar_url} alt={users.login} />
                <span>{users.login}</span>
                <a href={users.html_url} target='_blank' rel='noreferrer'>profile</a>
            </div>        
          )
        : (
            <>
                <h5>These guys are the oldest Github users... just look at their ID number</h5>
                <div className='github__users'>
                    {
                        users.map(({login, id, avatar_url, html_url}) => (
                            <div key={id} className='user'>
                                <img src={avatar_url} alt={login} />
                                <span>{login}</span>
                                <span>ID: {id}</span>
                                <a href={html_url} target='_blank' rel='noreferrer'>profile</a>
                            </div>
                        ))
                    }
                </div>
            </>
        )
}

export default ReactPlayground

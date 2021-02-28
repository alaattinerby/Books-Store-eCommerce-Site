import React, {Component, useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import "./css/books.css"

function Books(){

    const [links, setLinks] = useState([])

    useEffect( () =>{
        axios.get('http://localhost:3004/books')
        .then(function ({data}){
            setLinks(data)
        })
        .catch(function(error){
            console.log(error)
        })
    },[])

    return(
        <>
            <section className="bookSection">
                <div className="container">
                    <div className="row">
                        {links.map(book => (
                            <div className="col-6 col-sm-4 col-md-4 col-lg-3">
                                <div className="bookSection__card" key={book.id}>
                                <Link to={`/books/${book.id}`}>
                                    <img src={require(`../components/svg/${book.image}`).default} alt={book.title}/>
                                </Link>
                                <div className="bookSection__cardContent">
                                    <h2><Link to={`/books/${book.id}`}>{book.bookTitle}</Link></h2>
                                    <span>{book.author}</span>
                                    <h3>{book.price}</h3>
                                    <h4>Sepete Ekle</h4>
                                </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Books

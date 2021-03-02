import React, {Component, useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const DataContext = React.Context();


function DataProvider() {

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
        <DataContext.Provider>
            {this.props.links}
        </DataContext.Provider>
    )
}

export default DataProvider

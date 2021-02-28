import React, {useState, useEffect} from 'react'
import logo from "./svg/logo.png"
import "./css/header.css"
import bars from "./svg/bars.svg"
import basket from "./svg/basket.svg"
import axios from 'axios'
import menuToggle from "./menuToggle"
import { Link } from 'react-router-dom'



function Header(){

    const [links, setLinks] = useState([])

    useEffect( () =>{
        axios.get('http://localhost:3004/navBar')
        .then(function ({data}){
            setLinks(data)
        })
        .catch(function(error){
            console.log(error)
        })
    },[])

        return (
            <>
            <header className="header">
                <div className="container">
                    <a href="/"><img src={logo} className="header__logo"></img></a>
                    <input type="checkbox" id="toggler" class="header__toggler"/>
                    <label htmlFor="toggler" class="header__burger">
                        <img src={bars} onClick={menuToggle} className="header__bars"/>
                    </label>
                    <nav className="navBar" id="navBar">
                        {links.map(menuBar=> {
                            return(
                                <Link to={menuBar.link} key={menuBar.id}>{menuBar.title}</Link>
                            )
                        })}
                    </nav>
                    <div className="basket">
                        <span className="basket__number">0</span>
                        <img src={basket} className="basket__icon"></img>
                    </div>
                </div>
            </header>
            
            </>
        )
}

export default Header

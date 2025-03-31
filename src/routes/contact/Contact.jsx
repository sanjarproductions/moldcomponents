import React from 'react'
import "./Contact.css"

import Nav from "../../components/nav/Nav"
import Search from "../../components/search/Search"
const Contact = () => {
    return (
        <>
            <Nav />
            <Search />
            <div className="container">
                <h1 className='contact-title'>Биз билан боғланинг</h1> 
                <br />
                <a href="tel:+998911860085">+998911860085</a> 
                <br />
                <a href="mailto:erkinjon.hodjaev@gmail.com">erkinjon.hodjaev@gmail.com</a>
                <br />
                <p>Наманган вилояти , Давлатобод тумани , Дустлик Шох кучаси 109-уй</p>
            </div>
        </>
    )
}

export default Contact

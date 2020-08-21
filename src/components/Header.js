import React from 'react';
import {Link} from 'react-router-dom';

function Header(){

    let hover = (event) => {
        event.target.style.color ='#d9d9d9'
    }

    let hoverOut = (event) => {
        event.target.style.color ='#fff'
    }

    return(
        <header style={headerStyle}>
            <h1>Todo List</h1>
            <Link 
            style = {linkStyle} 
            onMouseEnter = {(event) => hover(event)}
            onMouseLeave = {(event) => hoverOut(event)}
            to="/">Home</Link>
            &nbsp;|&nbsp;  
            <Link 
            style = {linkStyle} 
            onMouseEnter = {(event) => hover(event)}
            onMouseLeave = {(event) => hoverOut(event)}
            to="/about">About</Link>
        </header>
    )
}
const headerStyle ={
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding:'10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'underline'
}

export default Header;
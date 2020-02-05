import React from "react";

function Header (props) {
    const appHead = {
        color: '#5d6161',
        textAlign: 'center',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        fontFamily: '"Courier New", Courier, monospace',
        textShadow: '2px 2px #ffffff',
        opacity: '1'
    }
    return (
        <header style={appHead}>
            To-do List
        </header>
    )
}

export default Header;

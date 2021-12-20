import React from 'react';
import Hello from './Hello'
import './Jsxcss.css'

function Jsxcss() {
    let name = 'react';
    const myStyle = {
        backgroundColor: "blue",
        color: "white",
        fontSize: 24, //default px
        padding: "1rem"
    }

    return (
        <>
            {/*==this is comment == 주석처리법*/}
            <Hello />
            <div style= {myStyle}>{name}</div>
            <div className="red-box">redbox</div>
        </>
    );
}

export default Jsxcss;
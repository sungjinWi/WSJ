import React, {Fragment} from 'react';

function Jsxtest() {
    let name = 'my name is react!!!'
    return ( //div여러개 할려면 빈태그로 막아주자
        <>
            <div>
                <h1>Hello world!!!</h1>
            </div>
            <div>
                <h1>Hello React!!!</h1>
                <h2>{name}</h2>
            </div>
            <input />
            <br />
            <label>Hello label</label>
        </>
    );
}

export default Jsxtest;
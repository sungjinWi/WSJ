import React, {useState} from "react";

function Counter() {
    const [number, setNumber] = useState(0); // number초기값은 0;  2번째 setNumber는 콜백;  감싸고 있는 전체 배열이 const로 선언된것
    // component는 자기자신에 대한 state를 관리한다
    // const onIncrease = () => {
    //     setNumber(number + 1);
    //     console.log("+1");
    // };
    // const onDecrease = () => {
    //     setNumber(number -1);
    //     console.log("-1");
    // };
    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1);
        console.log({number} + "increase");
    };
    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1);
        console.log("-1");
    };
    return (
        <>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </>
    );
}

export default Counter;
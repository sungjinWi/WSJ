import React, {useState, useRef } from 'react';


export default function InputExam() {
    const [inputs, setInputs] = useState({//초기값 세팅
        name: '',
        nickname:''
    });

    const nameInput = useRef();
    const { name, nickname } = inputs; //비구조화 할당을 통해 값 추출

    const changeHandler = e => { //(e)에서 괄호생략가능
        const {value, name} = e.target; //우선 e.target에서 name과 value를 추출

        setInputs({
            ...inputs, //기존의 input 객체를 복사한 뒤
            [name]: value //name key를 가진 값을 value로 설정
        });
    }

    const resetHandler = () => {
        setInputs({
            name: '',
            nickname:''
        });

        nameInput.current.focus();
    }

    return (
        <div>
            <input 
                name="name"
                placeholder='name'
                onChange={changeHandler}
                value={name}
                ref={nameInput}
            />
            <input
                name='nickname'
                onChange={changeHandler}
                value={nickname}
            />
            <button onClick={resetHandler}>Reset!</button>
            <div>
                <b>Value: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

import React from 'react';

class Gundam extends React.Component { //react component는 언제나 React.Component class를 상속받아서 만들어져야한다
    constructor(props) {
        super(props); //super()는 부모의 constructor를 먼저 실행 props는 부모로부터 가져온것이기떄문
    }

    render() { //component에 있는 애를 OVERLOADING하는 것; 부모가 준 내용을 재정의 한것
                //COMPONENT의 render
        return <h1>This Gundam is {this.props.model}!!!</h1>
    }
}

export default Gundam;
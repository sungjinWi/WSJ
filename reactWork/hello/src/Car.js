import React from 'react';

class Car extends React.Component {
    constructor() {
        super(); //react.component
        this.state = {color: "red"};
    }

    render() {
        // return <h1>This is my {this.state.color} Car!!!</h1>;
        return <h1>This is my {this.props.color} Car!!!</h1>;
    }
}

export default Car;
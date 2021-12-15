import React from 'react';

class Gundam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            camp: "Earth",
            model: "X108",
            engine: "Atomic",
            pilot: "Yamato"
        };
    }
    // getDerivedStateFromProps() {} //부모로부터 상속되었다
    changeModel = () => { //class안에는 function을 붙이지 않는다
        this.setState({model: "X109 Justice"})
    }

    render() { 
        return (
            <div>
                <h1>{this.state.model}</h1>
                <h2>It is camp is {this.state.camp}</h2>
                <h2>The engine is {this.state.engine}</h2>
                <h2>The Pilot name is {this.state.pilot}</h2>
                <h2>The Cargo is {this.props.cargo}</h2>
                <button type="button" onClick={this.changeModel}>Change Model</button>
            </div>
        )
    }
    // componentDidMount()
}

export default Gundam;
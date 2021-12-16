import React from "react";

class Gundam extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(<h2>This is {this.props.model}</h2>)
    }
}

class Archangel extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <>
                <h1>Which Gundam in Archangel??</h1>
                <Gundam model={this.props.model}/>
            </>
        );
    }
}

export default Archangel;
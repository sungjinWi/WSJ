import React from "react";

class Gundam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            camp: "Earth",
            model: "X108",
            engine: "Atomic",
            year: "Cosmic 70",
            pilot: "Kira Yamato"
        };
    }
    render () {
        return (
            <>
                <h2>This is {this.state.model}</h2>
            </>
        );
    }
}

class Archangel extends React.Component {
        render() {
            return(
                <>
                    <h1>Which Gundam is in Archangel?</h1>
                    <Gundam />
                </>
            );
        }
}

export default Archangel;
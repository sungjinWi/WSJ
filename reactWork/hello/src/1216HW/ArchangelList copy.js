import React from "react";

class Gundam extends React.Component{
    constructor(props) {
        super(props);
        this.state = 
            {
            gundamList: ["ZMGF-X10A Freedom Gundam",
                        "ZMGF-X109 Justice Gundam",
                        "Strike Gundam"]
            };
    }
    render() {
        return(<div>
            {this.state.gundamList.map((name)=> {return(<li>This gundam is {name}</li>)})}
            </div>
        )
    }
}

class Archangel extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <h1>Which Gundam lives in Archangel??</h1>
                <ul><Gundam /></ul>
            </>
        );
    }
}



export default Archangel;
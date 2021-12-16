import React from "react";


class Football extends React.Component{
    constructor(props){
        super(props);
    }
    shoot = (a, e) => {
        alert(a + " " + e.type);
    }
    render() {
        return(<button type="button" onClick={(e)=> this.shoot("The tremendous Goal Son!!!",e)}>Take the shot!</button>)
    }
}

export default Football;
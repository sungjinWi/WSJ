// function Goal(props) {
//     const isGoal = props.isGoal;

import React from "react";


class MissGoal extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return <h1>MISSED GOAL RONALDO</h1>
    }
}
class MadeGoal extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return <h1>The tremendous Goal son!!</h1>
    }
}

class Goal extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        const isGoal = this.props.isGoal;
        
        return (
            <>
            {isGoal ? <MadeGoal /> : <MissGoal />}
            </>
        )
    }
}

export default Goal;
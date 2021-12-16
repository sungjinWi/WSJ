function MissGoal() {
    return <h1>MISSED GOAL RONALDO</h1>
}
function MadeGoal() {
    return <h1>The tremendous Goal son!!</h1>
}


// function Goal(props) {
//     const isGoal = props.isGoal;
    
//     if(isGoal) {
//         return <MadeGoal />;
//     }

//     return <MissGoal />;
// }

function Goal(props) {
    const isGoal = props.isGoal;

    return (
        <>
            {isGoal ? <MadeGoal /> : <MissGoal />}
        </>
    )
}


export default Goal;
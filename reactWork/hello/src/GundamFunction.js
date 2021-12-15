function Gundam (props) {
    return (
        <div>
            <h1>{props.model}</h1>
                <h2>It is camp is {props.camp}</h2>
                <h2>The engine is {props.engine}</h2>
                <h2>The Pilot name is {props.pilot}</h2>
                <h2>The Cargo is {props.cargo}</h2>
                <button type="button" onClick={changeModel(props)}>Change Model</button>
        </div>
    )
}

function changeModel(props) {
    return props.model = "X109 Justice"
}
export default Gundam;
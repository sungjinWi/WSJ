function Car(props) {
    return <h1>This is my {props.color} car!!!</h1> //argument를 받아서 출력
}

function Garage() {
    return (
        <>
            <h1>My Garage in the which car!!</h1>
            <Car />
        </>
    )
}
export default Garage;
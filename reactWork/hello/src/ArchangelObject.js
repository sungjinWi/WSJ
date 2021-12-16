function Gundam(props) {
    return <h2>This is {props.model}!!!!</h2>
}

function Archangel() {
    return (
        <>
            <h1>Which gundam in Archangel?</h1>
            <Gundam model="ZGMF-X10A" />
        </>
    )
}

export default Archangel;
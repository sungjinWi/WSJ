function Gundam(props) {
    return <h2>This is {props.ginfo.model}!!!!</h2>
}

function Archangel() {
    const gundamInfo = {
        camp: "Earth",
        model: "X108",
        engine: "Atomic",
        year: "Cosmic 70",
        pilot: "Kira Yamato"
    };

    return (
        <>
            <h1>Which gundam in Archangel?</h1>
            <Gundam ginfo={gundamInfo} />
        </>
    )
}

export default Archangel;
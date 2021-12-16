function Gundam(props) {
    return <li>This is {props.model}!!!!</li>;
}

function Archangel() {
    const gundamList = [
        "ZMGF-X10A Freedom Gundam",
        "ZMGF-X109 Justice Gundam",
        "Strike Gundam"
    ];

    return (
        <>
            <h1>Which Gundam lives in Archangel??</h1>
            <ul>
                {gundamList.map((robot) => <Gundam model={robot}/>)}
            </ul>
        </>
    );
}

export default Archangel;
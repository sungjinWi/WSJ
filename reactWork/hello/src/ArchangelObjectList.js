function Gundam(props) {
    return <li>This is {props.model}!!!!</li>;
}

function Archangel() {
    const gundams = [
        {id: 1, model: "ZMGF-X10A Freedom Gundam V2"},
        {id: 2, model: "ZMGF-X109 Justice Gundam V2"},
        {id: 3, model: "Strike Gundam V2"}
    ];

    return (
        <>
            <h1>Which Gundam lives in Archangel??</h1>
            <ul>
                {gundams.map((mobileSuite) => <Gundam key={mobileSuite.id} model={mobileSuite.model} />)}
            </ul>
        </>
    )
}

export default Archangel;
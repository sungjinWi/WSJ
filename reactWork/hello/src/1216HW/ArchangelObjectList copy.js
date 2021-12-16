import React from "react";

class Gundam extends React.Component{
    render() {
        return(<li>This is {this.props.model}!!!!</li>)
    }
}

class Archangel extends React.Component{
    constructor(props){
        super(props);
        this.state ={ 
            gundams : [
                {id: 1, model: "ZMGF-X10A Freedom Gundam V2"},
                {id: 2, model: "ZMGF-X109 Justice Gundam V2"},
                {id: 3, model: "Strike Gundam V2"}
            ]
        };
    }
    render(){
        return(
            <>
                <h1>Which Gundam lives in Archangel???</h1>
                <ul>
                    {this.state.gundams.map((mobileSuite)=><Gundam key={mobileSuite.id} model={mobileSuite.model} />)}
                </ul>
            </>
        );
    }
}

export default Archangel;
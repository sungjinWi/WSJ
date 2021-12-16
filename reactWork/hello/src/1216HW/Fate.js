import React from "react";


class Fate extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        const characters = this.props.chracters;
        return(
            <>
        <h1>Fate Characters!!!</h1>
        {
            characters.length > 0 && //뒷부분은 존재하기 때문에 항상 참이다
            <h2>
                {characters.length} characters in Fate Stay Night Animation
            </h2>
        }
        </>
        );
    }
}

export default Fate;
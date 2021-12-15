import React from "react";

class Container extends React.Component {
    constructor(props) {
        super(props);

        this.state = {show: true};
    }

    delHandler = () => {
        this.setState({show: false});
    }
    render() {
        let myheader;
        if(this.state.show) {
            myheader = <Child />;
        }

        return (
            <div>
                {myheader}
                <button type="button" onClick={this.delHandler}>Delete Handler</button>
            </div>
        )
    }
}

// class Child extends React.Component {
//     componentWillUnmount () {
//         alert("The component named header is about to be unmounted");
//     }

//     render() {
//         return (
//             <h1>Hello world!!!</h1>
//         );
//     }
// }
function Child() {
    return ()
}
export default Container;
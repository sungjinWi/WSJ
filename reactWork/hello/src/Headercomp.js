import React from 'react';

class Headercomp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {headertitle:"This is My page of header"};
    }

    // static getDerivedStateFromProps(props, state) { // derive 상속
    //     return {headertitle: props.newTitle}; //다시 재정의해주겠다 render하기전에 바뀌어서 바뀐게 들어옴
    //     // state.headertitle = props.newTitle; //static일때는 this.property라고 못쓴다
    //     // return state.headertitle;
    // }

    // shouldComponentUpdate() {
    //     return true; //false일때는 안바뀜
    // }

    
    componentDidMount() {//실행되는 순서와 정의하는 순서는 상관없기 때문에 render전에 정의해도 된다
        setTimeout(() => {
            this.setState({headertitle : "componentDidMount title!!!"})
        }, 5000)
    } // static getDerivedStateFromProps이 static하게 바꿔놓으면 먹히지 않음

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML =
        "Before update title is " + prevState.headertitle + " Before update newTitle is " + prevProps.newTitle
    }

    componentDidUpdate() {
        document.getElementById("div2").innerHTML = 
        "The update title is " + this.state.headertitle;
    }

    render() {
        return (
            <div>
                <h1>{this.state.headertitle}</h1>
                <h3 id="div1"></h3>
                <h3 id="div2"></h3>
            </div>
        );
    }
    // changeHeaderTitle = () => {
    //     this.setState({headertitle: "changeHeaderTitle"})
    //     console.log("whyyyyyyyyyyyyyyyyyyyyy")
    // }
    // render() {
    //     return (
    //         <div>
    //             <h1>{this.state.headertitle}</h1>
    //             <button type="button" onClick={this.changeHeaderTitle}>Change title</button>
    //         </div>
    //     )
    // }
}

export default Headercomp;
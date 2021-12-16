// 1
// function Football() {
//     const shoot = () => {
//         alert("Great shot with son!!!");
//     };

//     return (
//         <button type="button "onClick={shoot}>Take the shot</button>
//     );
// }


// 2
// function Football() {
//     const shoot = (arg) => {
//         alert(arg);
//     };

//     return (
//         <button type="button" onClick={() => shoot("The tremendous Goal Son!!!")}>Take the shot</button>
//         // <button type="button" onClick={shoot("The tremendous Goal Son!!!")}>Take the shot</button> 안됨 =>로만 argument 호출해서 쓸 수 있다
//     );
// }

// 3 react handler
function Football() {
    const shoot = (a, e) => {//argument, event
        alert(a + " " + e.type);
    };

    return (
        <button type="button" onClick={(event) => shoot("The tremendous Goal Son!!!", event)}>Take the shot!</button>
    );
}

export default Football;
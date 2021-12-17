import React, {useState} from 'react'; //상태 후킹해온다

function Wow() {
    const [inputs, setInputs] = useState({}); // inputs가 오브젝트이기 때문에 useState({})
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value})); //이름 하고 밸류의 멀티로 받아올거야 멀티플 인풋이라 ...으로 쓴다
        //values에 [key] : value라는 형태의 오브젝트를 넣는것이다 
    } 
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    return ( //자바스크립트이지만 jsx로 쓰는거라서 밑처럼 쓴다
        <form onSubmit={handleSubmit}>
            <label>Enter Your Name : 
                <input
                    type="text"
                    name="username"
                    value={inputs.username || ""}
                    onChange={handleChange}
                />
            </label>
            <label>
                <input
                    type="number"
                    name="age"
                    value={inputs.age || ""}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" />
        </form>
    );
}

export default Wow;
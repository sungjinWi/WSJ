import { useState } from "react";

function Hordform() {
    const [clan, setClan] = useState("");//초기값 안준것
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The clan name you entered was ${clan}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter Your Clan : 
                <input
                    type="text" 
                    value={clan} 
                    onChange={(e) => setClan(e.target.value)} 
                />
            </label>
            <input type="submit" />
        </form>
    );
}

export default Hordform;
import {useEffect, useState} from "react";

function Counter(){
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("Count changed to:", count)
    },[count])
    return(
        <>
            <div className="countDiv">
                <p>Count value is {count}</p>
                <button onClick={()=>setCount(count + 1)}>Increase</button>
                {count >= 10 && <p>Limit cross ho gayi!</p>}
            </div>
        </>
    )
}

export default Counter;
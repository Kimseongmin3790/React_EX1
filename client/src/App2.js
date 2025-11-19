import { useState } from "react";

function App2() {

    let num = 1;
    // let stateNum = useState(1);
    // let value = stateNum[0]; // 1
    // let setValue = stateNum[1]; // 함수(set)

    let [value, setValue] = useState(1);

    function increaseNum() {
        // setValue(value+1);
        setValue(prev => prev+1);
    }

    function decreaseNum() {
        setValue(value-1);
    }

    return (
        <>
            <div>현재 숫자 : {value >= 5 ? value + "(큰 숫자)" : value + "(작은 숫자)"}</div>
            <div>
                <button onClick={()=>{
                    setValue(value+1);
                    console.log(value);
                }}>숫자 증가!</button>
            </div>
            <div>
                <button onClick={increaseNum}>숫자 증가!</button>
                <button onClick={decreaseNum}>숫자 감소!</button>
            </div>
        </>
    )
}

export default App2;
import { useState } from "react";

function StateEx() {
    let varNum = 1;
    let [stateNum, setStateNum] = useState(1);

    function fnDecreaseNum() {
    // return setStateNum(prev => prev - 1)
        return setStateNum(stateNum - 1)
    }

    return (
        <>
            <div>varNum : {varNum}</div>
            <div>stateNum : {stateNum}</div>
            <hr></hr>
            <div>
                <button onClick={() => {
                    varNum += 1;
                    console.log(varNum);
                }}>varNum 증가</button>
                <button onClick={() => {
                    setStateNum(stateNum + 1);
                }}>stateNum 증가</button>
                <button onClick={fnDecreaseNum}>stateNum 감소</button>
            </div>
        </>
    )
}

export default StateEx;
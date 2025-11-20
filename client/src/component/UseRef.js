import { useRef, useState } from "react";

function Ref() {
    let varNum = 1;
    let [stateNum, setNum] = useState(1);
    let refNum = useRef(1);
    console.log(refNum);

    return <>
        <div> varNum : {varNum} </div>
        <div> stateNum : {stateNum} </div>
        <div> refNum : {refNum.current} </div>
        <hr></hr>
        <div>
            <button onClick={() => varNum++}>varNum 증가</button>
            <button onClick={() => setNum(stateNum + 1)}>stateNum 증가</button>
            <button onClick={() => refNum.current++}>refNum 증가</button>
        </div>
    </>
}

export default Ref;

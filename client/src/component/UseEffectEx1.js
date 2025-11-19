import { useEffect, useState } from "react";

function EffectEx() {
    let[value, setValue] = useState(1);
    let[num, setNum] = useState(1);

    // useEffect(()=>{
    //     console.log("useEffect 호출");
    // });

    // useEffect(()=>{
    //     console.log("useEffect 호출");
    // }, [])

    useEffect(()=>{
        console.log("useEffect 호출");
    }, [value, num])

    return (
        <>
            <div>value : {value}</div>
            <div>num : {num}</div>
            <div>
                <button onClick={()=>{
                    setValue(value+1);
                }}>value 증가</button>

                <button onClick={()=>{
                    setNum(num+1);
                }}>num 증가</button>
            </div>
        </>
    )
}

export default EffectEx;
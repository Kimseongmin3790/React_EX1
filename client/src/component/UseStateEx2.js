import { useState } from "react";

function StateEx() {
    let [color, setColor] = useState("blue");

    function fnColor() {
        if (color == "blue") {
            setColor("red");
        } else {
            setColor("blue");
        }
    }
    
    return (
        <>
            <div>
                <button onClick={fnColor}>blue/red</button>
            </div>
            <div style={{color : color, fontWeight : "bold"}}>React 재밌다</div>
        </>
    )
}

export default StateEx;
import { useEffect, useState } from "react";

function EffectEx() {
    let [text, setText] = useState("");
    let list = [];
    useEffect(()=>{
        fetch("http://localhost:3010/product")
        .then( res => res.json() )
        .then( data => {
            list = data.list;
            console.log(list);
        } )

    })

    return (
        <>
            <div><input value={text} onChange={(e)=>{
                setText(e.target.value);
            }}></input></div>
            <div>text : {text}</div>
        </>
    )
}

export default EffectEx;
import { useEffect, useState } from "react";

function EffectEx() {
    let [text, setText] = useState("");    
    let [list, setList] = useState([]);

    function fnList() {
        fetch("http://localhost:3010/product?keyword=" + text)
        .then( res => res.json())
        .then( data => {            
            console.log(data);
            setList(data.list);
        })
    }

    // function fnRemove(productId) {
    //     fetch("http://localhost:3010/product/" + productId, {
    //         method : "DELETE"
    //     })
    //     .then( res => res.json())
    //     .then( data => {            
    //         alert(data.msg);
    //         fnList();
    //     })
    // }

    useEffect(()=>{
        fnList();
    }, [])

    return (
        <>
            <div>
                <input value={text} onChange={(e)=>{ setText(e.target.value); }}></input>
                <button onClick={fnList}>검색</button>
            </div>
            <div>text : {text}</div>            
            <hr></hr>

            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제품명</th>
                        <th>가격</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(item => {
                        return (
                            <tr key={item.productId}>
                                <td>{item.productId}</td>
                                <td>{item.productName}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button onClick={() => {
                                        if (!window.confirm("정말 삭제하시겠습니까")) {
                                            return;
                                        }
                                        fetch("http://localhost:3010/product/" + item.productId, {
                                            method : "DELETE"
                                        })
                                        .then( res => res.json())
                                        .then( data => {            
                                            alert(data.msg);
                                            fnList();
                                        })
                                    }}>삭제</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default EffectEx;
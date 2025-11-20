import { useEffect, useRef, useState } from "react";

function ProductAdd() {
    let nameRef = useRef(null);
    let price2 = useRef(null);
    let [price, setPrice] = useState();    

    function fnNameRef() {
        console.log(nameRef.current.value);
        nameRef.current.focus();
    }

    function fnAdd() {
        // 가격을 입력 후 '저장'버튼 클릭 시
        // 가격이 0이하면 '1이상의 숫자를 입력해주세요' 알림 띄운후
        // 가격 input 박스에 focus주기
        console.log(price2);
        if (price2.current.value <= 0) {
            alert("1이상의 숫자를 입력해주세요");
            price2.current.focus();
        }
        
        // tbl_product 테이블에 저장
        fetch("http://localhost:3010/product", {
            method : "POST",
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify({
                productName : nameRef.current.value, 
                price : price2.current.value
            })
        })
            .then( res => res.json() )
            .then( data => {
                alert("추가되었습니다");
            })
    }

    useEffect(()=>{
        nameRef.current.focus()
    }, []);

    return <>
        <div>제품명 : {nameRef.current?.value}</div>
        <div>가격 : {price}</div>
        <hr></hr>
        <div>제품명 : <input ref={nameRef}></input></div>
        {/* <div>가격 : <input value={price} onChange={(e)=>{
            setPrice(e.target.value);
        }}></input></div> */}
        <div>가격 : <input ref={price2}></input></div>
        <div>
            <button onClick={fnNameRef}>focus</button>
            <button onClick={fnAdd}>저장</button>
        </div>
    </>
}

export default ProductAdd;
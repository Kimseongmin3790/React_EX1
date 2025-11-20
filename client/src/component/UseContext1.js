import { useContext } from "react";
import { PersonContext } from "./context/PersonContext";

function Contents1() {
    let {name, age, addr} = useContext(PersonContext);
    return <>
        <div>{"Context로 보낸 name : " + name}</div>
        <div>{"age : " + age + " addr : " + addr}</div>
    </>
}

function Contents2(props) {
    return <>
        <div>{"props로 보낸 name : " + props.name}</div>
    </>
}

function Body(props) {
    return <>
        <Contents1></Contents1>
        <Contents2 name={props.name}></Contents2>
    </>
}

function Project(props) {
    return <>
        <Body name={props.name}></Body>
    </>
}

function ContextEx() {
    let name = "홍길동";
    let age = 30;
    let addr = "인천";
    return <>
        <PersonContext.Provider value={{age,name,addr}}>
            <Project name={name}></Project>
        </PersonContext.Provider>
    </>
}

export default ContextEx;
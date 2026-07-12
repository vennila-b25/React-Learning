import React,{useState} from "react";
// import Counter from "./Counter.jsx";


function NameComp(){


    const[name,setName]=useState('luffy');
    const changeName=()=>{
        if(name ==="luffy"){
            setName("arun");
        }else{
            setName("luffy");
        }
    }
    return(
        <div>
            <h1>Name:{name}</h1>
            <button onClick={changeName}>add</button>
            {/* <Counter/> */}
        </div>
    )
}

export default NameComp
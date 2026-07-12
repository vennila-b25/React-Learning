import React ,{useState} from "react";


function Cart(){
    const[count,setCount]=useState(0);

    const incrementCount=()=>{
       if(count<10){
        setCount(count+1);
       } 
       else{
        setCount(0)
       }

    }
    return(
        <div>
            <h1>cart-{count}</h1>
            <button onClick={incrementCount}>change</button>
        </div>
    );
}

export default Cart;
import React ,{useEffect,useState} from 'react'



function HookOne(){


    const[count,setcount]=useState(0)



    useEffect(()=>{

        console.log("mounting")
    },[count])



    const handleadd=()=>{
    setcount(count+1)

    }



    return(
      <div>

        <h1>USE EFFECT-{count}</h1>

        <button onClick={handleadd}>ADD</button>
      </div>
    )
}

export default  HookOne
import React ,{useState} from 'react';
import { useForm } from "react-hook-form";


function FormOne () {
    const[name,setname]=useState("")
    const[age,setage]=useState(0)
    const[ishide,setishide]=useState(false)

     const { register, handleSubmit } = useForm();


    const handlename=(e)=>{
        setname(e.target.value)
    }
    const handleage=(event)=>{
       setage(event.target.value)
    }

    const handleshow=()=>{
        setishide(true)
    }
  return (
    <div>     

    <h1> Form One</h1>
  {ishide?null:
    <div>
        <label>name</label>
        <input onChange={handlename} placeholder="enter name"/>
        <br/>
         <br/>
        <label>age</label>
        <input onChange={handleage} placeholder="enter age "/>
        <br/><br/>
        <button onClick={ handleshow}>submit</button>
    </div>
    }
   
{ishide?
    <div> 
       <h1>name:{name}</h1>
       <h1>age:{age}</h1>
    </div>
   :null }
</div>

  );
}

export default  FormOne;
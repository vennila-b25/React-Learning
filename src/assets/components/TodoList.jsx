import axios from 'axios'
import React,{useEffect,useState} from 'react'

export default function TodoList(){
    const[inputdata,setinputdata]=useState("")
    const[apidata,setapidata]=useState([])
      

    const handleinput=(e)=>{
        setinputdata(e.target.value)
    }

    const handlesend=async()=>{
        try{
            let body={
                data:inputdata
            }
            let data=await axios.post("http://localhost:3000/todoList",body)
            alert("data sent succ")
            handleget()
        }
        catch(Err){
            console.log(Err);
        }
    }

    const handleget=async()=>{
        let res=await
        axios.get("http://localhost:3000/todoList")
        setapidata(res.data);
    }
 useEffect(()=>{
        handleget()
    },[])

 const handleDelete = async (id) => {
    console.log(id,"id");
      let res=await axios.delete("http://localhost:3000/todoList/" + id);
        handleget();
    
    }


    const handleEdit = async(datas) => {
       let updatedata=prompt("update your data",datas.data);
       let body={data:updatedata};
       await axios.put("http://localhost:3000/todoList/"+datas.id,body);
       handleget();
};
return(
        <div>
            <h1>List</h1>
            <input  onChange={handleinput}placeholder='enter'/>
            <button onClick={handlesend}>submit</button>

            {apidata.map((da,i)=>(
                <div>
                    <h1>{i=i+1}.{da.data}</h1>
                    <button onClick={()=>handleEdit(da)}>edit</button>
                    <button onClick={()=>handleDelete(da.id)}>delete</button>
                </div> 

            ))}
            </div>
    )
}
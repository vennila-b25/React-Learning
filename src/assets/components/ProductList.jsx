import { useState } from "react";

function ProductList(){

    const[data,setdata]=useState({})
    const handlefetch=async()=>{
        let res=await fetch("https://fakestoreapi.com/products/13")
        let data=await res.json()
        setdata(data)

    }

 return(
        <div>

            
            <h1>PRODUCTS</h1>
            <img src={data.image} height='200' width='200'/><br/>
            <button onClick={handlefetch}>fetchcall</button>
</div>
    )
}
export default ProductList
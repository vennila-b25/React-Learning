import React,{ useState} from 'react'
import productdata  from '../../data/Product'
function ProductShow(){
    const[datas]= useState(productdata)
    
    return(
        <div>
            <h1>products</h1>

            {datas.map((da)=>(
                <div>
              
                <h1>{da.title}</h1>
                <img src={da.image} height={200} width={200}/>
                <h1>$:{da.price}</h1>
                 <h2>{da.category}</h2>
               
                 
                </div>            ))}
        </div>
    )
}

export default ProductShow
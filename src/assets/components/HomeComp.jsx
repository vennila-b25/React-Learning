import react from 'react'




export default function HomeComp({data}){


    return(
    <div className='container'>
        {data.map((da)=>(
        <div className="card">
        <h2>{da.title}</h2>
        <img src={da.image} height="200px"  width="200px"/>
<h4>category:{da.category}</h4>
        <h4>price:${da.price}</h4> 

<button>add to cart</button>

    
        </div>
))}
        </div>
    )}

    

    







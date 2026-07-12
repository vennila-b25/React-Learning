import React,{useEffect,useState} from "react";

// import "./App.css";

// import NameComp from "./assets/components/NameComp";
// import Cart from "./assets/components/Cart";
// import ProductShow from './assets/components/ProductShow';

// import ProductDetails from './assets/components/ProductDetails';
// import ProductList from './assets/components/ProductList';

// import HookTwo from './assets/components/HookTwo';

// import HookOne from './assets/components/HookOne';
// import HomeComp from './assets/components/HomeComp';
import FormOne from'./assets/components/FormOne';
// import Home from'./assets/components/Home';
// import Product from'./assets/components/Product';
// import About from'./assets/components/About';

// import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
// import FormTwo from './assets/components/FormTwo';
// import TodoList from './assets/components/TodoList';
function App(){


  // const[data,setdata]=useState([])
//   const [log,setlog] = useState(true)

  
//     const handlelog = () =>{
// setlog(false)
//   }

// useEffect(()=>{
// const handlefetch=async()=>{
        // let res=await fetch("https://fakestoreapi.com/products")
        // let data=await res.json()
        // setdata(data)

// }
//         handlefetch()


// },[]);




  return ( 
    <div>
       {/* <ProductList/> */}
              {/* <ProductShow/> */}
              {/* <Cart/> */}

      
      {/* <TodoList/> */}

      {/* <FormTwo/> */}
    
<FormOne/> 

    {/* <HookTwo/> */}
      {/* <NameComp/> */}
      {/* <Counter/> */}
    {/* <ProductDetails/> */}


</div>

   

  );
}


{/* <BrowserRouter>
  <div>
     <Link to="Products/">Products</Link>
    <Link to="/">Home</Link>
    <Link to="About/">About</Link>
  </div>

<Routes>
 <Route element={<Home/>} path="/"/>
 <Route element={<Product/>} path="/Products"/>
 <Route element={<About/>} path="/About"/>
</Routes>
    </BrowserRouter>    */}


      

 

      {/* // <FormOne/>  */}
  {/* <HomeComp data={data}/> */}


// {/* <HomeComp/> */}
// {/* 
// {log ? <HookTwo/> : <h1>Loged out</h1> }
// ‌
//                 <button onClick={handlelog}>Logout</button> */}
//  </div>
// );
// }

export default App;

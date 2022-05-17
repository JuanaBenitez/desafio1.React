import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import {products} from "./components/Item/Item";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {

  const task = new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000)
  
  })
  
  task.then((result) => {
    console.log(result);
  })
 
  const onAdd = (count) => {
    onAdd(count);
  }
  


  return (
   <div className="App">
      <Navbar />
      <ItemCount stock= {10} initial= {0} onAdd = {onAdd} />
      <h1> Lorelai y Rory</h1>
      {products.map((product, index) => (
          <div key={index} >
            <p> {product.title} </p>
            <p> {product.stock}</p>
            <p> {product.price}</p>

          </div>

      )
      )}
      <ItemListContainer greeting={"Gracias por tu visita"} />
     
      
    </div>

    
  );






}

export default App;


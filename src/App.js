import React, { useState } from "react";
import Card from "./components/card";

//  import banner1 from "./assets/img/banner-1.jpeg";
//  import banner2 from "./assets/img/banner-2.jpg";
//  import banner3 from "./assets/img/banner-3.jpg";

const product = { title: "Samsung", price: 500, stock: 10 };
const product1 = { title: "Iphone", price: 600, stock: 2 };
const product2 = { title: "Xiaomi", price: 400, stock: 7 };

function App() {

  const [selectedProduct, setSelectedProduct] = useState("Válassz egy terméket")

  function handleOnClick(name) {
    console.log(`${name} hozzáadva a kosárhoz!`);
    setSelectedProduct(`${name} hozzáadva a kosárhoz!`)
    console.log(selectedProduct);
  }



  return (
    <div className="App">
      <h1>PK Webshop</h1>
      <h2>{selectedProduct}</h2>
    
        <Card
          name={product.title}
          price={product.price}
          stock={product.stock}
          addProduct={handleOnClick}
        />


        <Card
          name={product1.title}
          price={product1.price}
          stock={product1.stock}
          addProduct={handleOnClick}
        />

        <Card
          name={product2.title}
          price={product2.price}
          stock={product2.stock}
          addProduct={handleOnClick}
        />
   

      <h2>Ez más tartalom lesz!</h2>

    </div >
  );
}

export default App;

import "./App.css";
// import banner1 from "./assets/img/banner-1.jpeg";
// import banner2 from "./assets/img/banner-2.jpg";
// import banner3 from "./assets/img/banner-3.jpg";

const product = { title: "Samsung", price: 500, stock: 10 };
const product1 = { title: "Iphone", price: 600, stock: 2 };
const product2 = { title: "Xiaomi", price: 400, stock: 7 };

function App() {
  // komponens létrehozása
  function Card(props) {
    const { name, price, stock } = props;
    console.log(name, price, stock);

    return (
      <div className="card">
        <div className="card-title">
          <h2>{name}</h2>
        </div>
        <div className="card-body">
          <p>{price} $</p>
          <p>{stock} darab van készleten</p>
          <button>Kosárhoz</button>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Webshop</h1>
      <Card name={product.title} price={product.price} stock={product.stock} />
      <Card
        name={product1.title}
        price={product1.price}
        stock={product1.stock}
      />
      <Card
        name={product2.title}
        price={product2.price}
        stock={product2.stock}
      />

      {/* <div className="banner">
        <img src={banner1} alt="banner" />
        <img src={banner2} alt="banner" />
        <img src={banner3} alt="banner" />
      </div> */}
    </div>
  );
}

export default App;

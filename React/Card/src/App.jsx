import "./App.css";
import Card from './Card'

function App() {
  const product = {
    productName: "Car",
    productDes: "This is a car",
  };
  return (
    <>
      <Card data={product} />
      <Card
        data={{ ...product, productName: "Bike", productDes: "This is a bike" }}
      />
    </>
  );
}

export default App;

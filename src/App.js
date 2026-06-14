import React, { useState } from "react";
import "./App.css";

function App() {
  const [mobileCount, setMobileCount] = useState(0);
  const [laptopCount, setLaptopCount] = useState(0);

  const mobilePrice = 15000;
  const laptopPrice = 50000;

  const totalAmount =
    mobileCount * mobilePrice + laptopCount * laptopPrice;

  return (
    <div className="App">
      <h1>QuickCart</h1>

      <h2>Welcome to QuickCart Shopping App</h2>

      <hr />

      <h2>Products</h2>

      <div className="products-container">
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400"
            alt="Mobile"
          />

          <h3>Mobile</h3>

          <p>Price: ₹{mobilePrice}</p>

          <p>Items: {mobileCount}</p>

          <button onClick={() => setMobileCount(mobileCount + 1)}>
            Add Mobile
          </button>

          <button
            onClick={() =>
              mobileCount > 0 &&
              setMobileCount(mobileCount - 1)
            }
          >
            Remove Mobile
          </button>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400"
            alt="Laptop"
          />

          <h3>Laptop</h3>

          <p>Price: ₹{laptopPrice}</p>

          <p>Items: {laptopCount}</p>

          <button onClick={() => setLaptopCount(laptopCount + 1)}>
            Add Laptop
          </button>

          <button
            onClick={() =>
              laptopCount > 0 &&
              setLaptopCount(laptopCount - 1)
            }
          >
            Remove Laptop
          </button>
        </div>
      </div>

      <div className="summary">
        <h2>Cart Summary</h2>

        <p>Mobile Items: {mobileCount}</p>

        <p>Laptop Items: {laptopCount}</p>

        <h3>Total Amount: ₹{totalAmount}</h3>

        <button
          onClick={() => {
            setMobileCount(0);
            setLaptopCount(0);
          }}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default App;
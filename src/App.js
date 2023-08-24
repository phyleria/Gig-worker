import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("bank");
  const [paymentLink, setPaymentLink] = useState("");

  const handlePaymentRequest = async () => {
    // ... Your existing payment request code ...
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>GigPay Pro</h1>
      </header>
      <section className="home-section">
        <div className="home-content">
          <div className="home-text">
            <h2>Empowering Gig Workers, One Payment at a Time!</h2>
            <p>Get paid for your work in Minutes...</p>
          </div>
          <div className="home-images">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhRyn5hihih5Jcj4he4_NMCoFpPCD4b_Bad3z-rhhlyg&s"
              alt="Working from Home 1"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs0snGoYgX0QlkomAQyGX1ZyPI9ok54Chqd04dffhccw&s"
              alt="Working From home 3"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKoE2X-q_snv76-YGfC6RkA69nXPoL56CPezCO-VYhfw&s"
              alt="Working from Home 3"
            />
          </div>
        </div>
      </section>
      <section className="payment-section">
        <div className="payment-form">
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <label>Payment Method:</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="bank">Bank</option>
            <option value="digital_wallet">Digital Wallet</option>
            <option value="mobile_money">Mobile Money</option>
          </select>
          <button onClick={handlePaymentRequest}>Request Payment</button>
          {paymentLink && (
            <div className="payment-link">
              <p>Payment Link:</p>
              <a href={paymentLink} target="_blank" rel="noopener noreferrer">
                {paymentLink}
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;

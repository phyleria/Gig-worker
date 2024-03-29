import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import "./node.js";

function App() {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("bank");
  const [payerEmail, setPayerEmail] = useState("");
  const [requestSuccessful, setRequestSuccessful] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handlePaymentRequest = async () => {
    if (!amount || !payerEmail) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/send-payment-link",
        {
          amount: amount,
          payerEmail: payerEmail,
        }
      );

      console.log("Payment request successful:", response.data);
      setRequestSuccessful(true);
      setErrorMessage("");
    } catch (error) {
      console.error("Error making payment request:", error.response.data);
      setErrorMessage("An error occurred while processing your request.");
    }
  };

  return (
    <div className="App">
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
          <label>Payer's Email:</label>
          <input
            type="email"
            value={payerEmail}
            onChange={(e) => setPayerEmail(e.target.value)}
          />
          <label>Payment Method:</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="bank">Bank Deposit</option>
            <option value="digital_wallet">Chimoney Wallet</option>
            <option value="mobile_money">Mobile Money</option>
          </select>
          <button onClick={handlePaymentRequest}>Request Payment</button>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          {requestSuccessful && (
            <div className="success-message">
              <p>Payment request was successful!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;

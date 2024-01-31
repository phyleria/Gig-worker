const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios"); // Include Axios for making HTTP requests

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Endpoint to handle payment request and send payment link to email
app.post("/send-payment-link", async (req, res) => {
  const { amount, payerEmail } = req.body;

  // Validate request body
  if (!amount || !payerEmail) {
    return res
      .status(400)
      .json({ error: "Amount and payer's email are required." });
  }

  // Axios request to Chimoney API
  try {
    const response = await axios.post(
      "https://api-v2-sandbox.chimoney.io/v0.2/payment/initiate",
      {
        valueInUSD: amount,
        payerEmail: payerEmail,
      },
      {
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          "X-API-KEY":
            "3d39b499e47275350c3391cca27d6293b4a84f3f30d85e16ff22eeaffeae8aae", // Include your actual API key here
        },
      }
    );

    console.log("Payment request successful:", response.data);

    // Send email with payment link here...

    // Return success response
    return res.status(200).json({ message: "Payment request successful." });
  } catch (error) {
    console.error("Error making payment request:", error.response.data);
    return res.status(500).json({ error: "Error making payment request." });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

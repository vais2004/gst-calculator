import "./App.css";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState("");
  const [gst, setGST] = useState("");
  const [result, setResult] = useState(null);

  const calGST = () => {
    if (!amount || !gst) {
      <p className="alert-danger">Please enter Amount and GST Percentage!</p>;
      return;
    }

    const amountIs = Number(amount);
    const gstRate = Number(gst);

    const gstAmount = (amountIs * gstRate) / 100;
    const totalAmount = amountIs + gstAmount;

    setResult({
      gstAmount,
      totalAmount,
    });
  };
  return (
    <div className="container p-5">
      <div className="card mx-auto p-5" style={{ maxWidth: "600px" }}>
        <h2 className="text-center pb-5">GST Calculator🧮</h2>
        <div className="mb-3">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            className="form-control"
            placeholder="Enter Amount"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>GST Percentage</label>
          <input
            type="number"
            value={gst}
            placeholder="Enter GST %"
            className="form-control"
            onChange={(e) => setGST(e.target.value)}
          />
        </div>
        <button className="btn btn-outline-primary w-100" onClick={calGST}>
          Calculate GST
        </button>

        {result && (
          <div className="alert alert-secondary mt-4">
            <h5>Result</h5>
            <p>GST Amount: ₹{result.gstAmount.toFixed(2)}</p>
            <p>Total Amount: ₹{result.totalAmount.toFixed(2)}</p>
          </div>
        )}
      </div>
      <hr />

      <h5>Vaishnavi H. Kawale</h5>

      <p>vkawale2004@gmail.com</p>
    </div>
  );
}

export default App;

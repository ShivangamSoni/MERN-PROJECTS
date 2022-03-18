import { useState } from "react";

const AddTransaction = () => {
  const [info, setInfo] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <>
      <h3>Add New Transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="info">Info</label>
          <input value={info} onChange={(e) => setInfo(e.target.value)} type="text" id="info" placeholder="Enter Expense Info" />
        </div>

        <div className="form-control">
          <label htmlFor="amount">
            Amount <br /> (negative - expense, positive - income)
          </label>
          <input value={amount} onChange={(e) => setAmount(Number(e.target.value))} type="number" id="amount" placeholder="Enter Amount" />
        </div>

        <button type="submit" className="btn">
          Add Transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;

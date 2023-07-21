import React, { useState } from "react";

const NewTransactionForm = ({ addTransaction }) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.random(),
      amount: parseFloat(amount),
      description,
    };
    addTransaction(newTransaction);
    setAmount("");
    setDescription("");
  };

  return (
    <div>
      <h2>Add New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default NewTransactionForm;

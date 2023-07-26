import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar"
import TransactionTable from "./TransactionTable";
// S
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [transactionsData, setTransactionsData] = useState([]);

  const filteredTransactions = transactionsData.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(()=>{
    fetch("http://localhost:3000/transactions")
      .then((res) => res.json())
      .then((data) => setTransactionsData(data) )
  })
  const addTransaction = (newTransaction) => {
    setTransactionsData([...transactionsData, newTransaction]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bank of Flatiron</h1>
      </header>
      <main>
        {}
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        {}
        <TransactionTable transactions={filteredTransactions} />
      </main>
    </div>
  );
}

export default App;

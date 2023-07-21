import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import TransactionTable from "./components/TransactionTable";
import mockTransactions from "./mockData"; 

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [transactionsData, setTransactionsData] = useState(mockTransactions);

  const filteredTransactions = transactionsData.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

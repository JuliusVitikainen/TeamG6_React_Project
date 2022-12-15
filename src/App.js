import React from "react";
import { Header } from "./components/Header";
import { Expenses } from "./components/Expenses";
import { AllExpenses } from "./components/AllExpenses";
import { TransactionList } from "./components/TransactionList";
import { RefuelExpense } from "./components/RefuelExpense";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Expenses />
        <AllExpenses />
        <TransactionList />
        <RefuelExpense />
      </div>
    </GlobalProvider>
  );
}

export default App;

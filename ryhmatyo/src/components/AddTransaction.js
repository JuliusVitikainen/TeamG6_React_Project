import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

var idNumber = 0;

export const AddTransaction = () => {
  const [nameOfCar, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: idNumber,
      text: nameOfCar,
      amount: +amount,
    };

    idNumber++;
    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={nameOfCar}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter name of car"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (Expense Amount - negative only)
          </label>
          <input
            type="number"
            max="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
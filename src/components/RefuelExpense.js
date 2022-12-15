import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

var idNumber = 0;

export const RefuelExpense = () => {
  const [refuelQuantity, setRefuelQuantity] = useState(0);
  const [priceOfRefuel, setPriceOfRefuel] = useState(0);
  const [refuelDriveDistance, setRefuelDriveDistance] = useState(0);
  const [nameOfCar, setText] = useState("");

  const { RefuelExpense } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newRefuelExpense = {
      id: idNumber,
      refuelQuantity: +refuelQuantity,
      priceOfRefuel: +priceOfRefuel,
      refuelDriveDistance: +refuelDriveDistance,
      text: nameOfCar,
    };

    idNumber++;
    RefuelExpense(newRefuelExpense);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="refuelQuantity">Quantity for refuel</label>
          <input
            type="number"
            min="0"
            value={refuelQuantity}
            onChange={(e) => setRefuelQuantity(e.target.value)}
            placeholder="Enter Refuel Quantity"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="priceOfRefuel">
            Price for refuel <br />
            (Negative only!)
          </label>
          <input
            type="number"
            max="0"
            value={priceOfRefuel}
            onChange={(e) => setPriceOfRefuel(e.target.value)}
            placeholder="Enter Refuel Price"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="refuelDriveDistance">
            Distance Driven With Refuel
          </label>
          <input
            type="number"
            min="0"
            value={refuelDriveDistance}
            onChange={(e) => setRefuelDriveDistance(e.target.value)}
            placeholder="Enter Distance Driven With Refuel"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={nameOfCar}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter name of car"
            required
          />
        </div>
        <button className="btn">Add Refueling Expense</button>
      </form>
    </>
  );
};

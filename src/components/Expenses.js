import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return (
    "€ " +
    (p[0].split("")[0] === "-" ? "-" : "") +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}

export const Expenses = () => {
  const { transactions } = useContext(GlobalContext);

  const priceOfRefuel = transactions.map(
    (transaction) => transaction.priceOfRefuel
  );

  const total = priceOfRefuel.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <h4>Total Refuel Expenses</h4>
      <h1>{moneyFormatter(total)}</h1>
      <br></br>
      <h4>Total Consumption </h4>
      <h1>{(total)}</h1>
      <br></br>
      <h4>Total Refuel Drive Distance</h4>
      <h1>{(total)}</h1>
      <br></br>
      <h4>Average expense per 100km</h4>
      <h1>{(total)}</h1>
      <br></br>
      <h4>Average consumption per 100km</h4>
      <h1>{(total)}</h1>
      
    </>
  );
};

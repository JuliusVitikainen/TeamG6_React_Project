import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

//Currency formatter
function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return (
    "€ " +
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

export const AllExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const priceOfRefuel = transactions.map(
    (transaction) => transaction.priceOfRefuel
  );

  const expense =
    priceOfRefuel
      .filter((item) => item < 0)
      .reduce((acc, item) => (acc += item), 0) * -1;

  return (
    <div className="exp-container">
      <div>
        <h4>Expenses</h4>
        <p className="money minus">{moneyFormatter(expense)}</p>
      </div>
    </div>
  );
};

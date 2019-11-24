function checkCashRegister(price, cash, cid) {
  // get total cid
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let total = parseFloat(
    cid
      .flat()
      .filter(item => {
        return typeof item === "number";
      })
      .reduce(reducer)
      .toFixed(2)
  );
  console.log(total);

  // get change
  const CHANGE = cash - price;
  console.log(CHANGE);

  // if cid < CHANGE
  if (total < CHANGE) {
    console.log({ status: "INSUFFICIENT_FUNDS", change: [] });
    return { status: "INSUFFICIENT_FUNDS", change: [] };
    // if cid === CHANGE
  } else if (total === CHANGE) {
    console.log({
      status: "CLOSED",
      change: cid.filter(value => {
        console.log(value.includes(CHANGE));
        return value === value.includes(CHANGE);
      })
    });
  }
}

checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
]);
// checkCashRegister(19.5, 20, [
//   ["PENNY", 0.01],
//   ["NICKEL", 0],
//   ["DIME", 0],
//   ["QUARTER", 0],
//   ["ONE", 1],
//   ["FIVE", 0],
//   ["TEN", 0],
//   ["TWENTY", 0],
//   ["ONE HUNDRED", 0]
// ]);

//   Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
// cid is a 2D array listing available currency.
// The checkCashRegister() function should always return an object with a status key and a change key.
// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

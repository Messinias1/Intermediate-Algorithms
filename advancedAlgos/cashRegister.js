function checkCashRegister(price, cash, cid) {
  let penny = 0.01;
  let nickel = 0.05;
  let dime = 0.1;
  let quarter = 0.25;
  let one = 1;
  let five = 5;
  let ten = 10;
  let twenty = 20;
  let hundred = 100;

  let change = cash - price;
  let arr = [];
  let cidTotal;

  for (let i = 0; i < cid.length; i++) {
    console.log(cid[i]);
    arr.push(cid[i][1]);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    cidTotal = Math.round(arr.reduce(reducer) * 100) / 100;
  }
  console.log(cidTotal);
  //   console.log(price);
  //   console.log(cash);
  //   console.log(change);

  if (cidTotal < change) {
    console.log("no funds");
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (cidTotal == change) {
    console.log("even");
    for (let i = 0; i < cid.length; i++) {
      console.log(cid[i][1] == change);
      console.log({ status: "CLOSED", change: cid[i] });
      return { status: "CLOSED", change: cid[i] };
    }
  }
}
checkCashRegister(19.5, 20, [
  ["PENNY", 0],
  ["NICKEL", 0.5],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
]);

//   Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
// cid is a 2D array listing available currency.
// The checkCashRegister() function should always return an object with a status key and a change key.
// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

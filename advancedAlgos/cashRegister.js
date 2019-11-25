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
  var change = Math.round((cash - price) * 100) / 100;

  // if cid < change
  if (total < change) {
    console.log({ status: "INSUFFICIENT_FUNDS", change: [] });
    return { status: "INSUFFICIENT_FUNDS", change: [] };
    // if cid === change
  } else if (total === change) {
    console.log({
      status: "CLOSED",
      change: cid
    });
    return {
      status: "CLOSED",
      change: cid
    };
  } else if (change < total) {
    console.log(change);
    var obj = { status: "OPEN", change: [] };
    var hundred = 0;
    var twenty = 0;
    var ten = 0;
    var five = 0;
    var one = 0;
    var quarter = 0;
    var dime = 0;
    var nickel = 0;
    var penny = 0;

    while (100 <= change) {
      if (cid[8][1] === 0) {
        break;
      }
      hundred++;
      change = change - 100;
      cid[8][1] = cid[8][1] - 100;
    }
    if (hundred > 0) {
      obj.change.push(["ONE HUNDRED", 100 * hundred]);
    }

    while (20 <= change) {
      if (cid[7][1] === 0) {
        break;
      }
      twenty++;
      change = change - 20;
      cid[7][1] = cid[7][1] - 20;
    }
    if (twenty > 0) {
      obj.change.push(["TWENTY", 20 * twenty]);
    }

    while (10 <= change) {
      if (cid[6][1] === 0) {
        break;
      }
      ten++;
      change = change - 10;
      cid[6][1] = cid[6][1] - 10;
    }
    if (ten > 0) {
      obj.change.push(["TEN", 10 * ten]);
    }

    while (5 <= change) {
      if (cid[5][1] === 0) {
        break;
      }
      five++;
      change = change - 5;
      cid[5][1] = cid[5][1] - 5;
    }
    if (five > 0) {
      obj.change.push(["FIVE", 5 * five]);
    }

    while (1 <= change) {
      if (cid[4][1] === 0) {
        break;
      }
      one++;
      change = change - 1;
      cid[4][1] = cid[4][1] - 1;
    }
    if (one > 0) {
      obj.change.push(["ONE", 1 * one]);
    }

    while (0.25 <= change) {
      if (cid[3][1] === 0) {
        break;
      }
      quarter++;
      change = change - 0.25;
      cid[3][1] = cid[3][1] - 0.25;
    }
    if (quarter > 0) {
      obj.change.push(["QUARTER", 0.25 * quarter]);
    }

    while (0.1 <= change) {
      if (cid[2][1] === 0) {
        break;
      }
      dime++;
      change = change - 0.1;
      cid[2][1] = cid[2][1] - 0.1;
    }
    if (dime > 0) {
      obj.change.push(["DIME", 0.1 * dime]);
    }

    while (0.05 <= change) {
      if (cid[1][1] === 0) {
        break;
      }
      nickel++;
      change = change - 0.05;
      cid[1][1] = cid[1][1] - 0.05;
    }
    if (nickel > 0) {
      obj.change.push(["NICKEL", 0.05 * nickel]);
    }

    while (0.01 <= Math.round(change * 100) / 100) {
      if (cid[0][1] === 0) {
        break;
      }
      penny++;
      change = change - 0.01;
      cid[0][1] = cid[0][1] - 0.01;
    }
    if (penny > 0) {
      obj.change.push(["PENNY", 0.01 * penny]);
    }
    console.log(change);
    if (change > 0) {
      console.log({ status: "INSUFFICIENT_FUNDS", change: [] });
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else {
      console.log(obj);
      return obj;
    }
  }
}

checkCashRegister(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 1],
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

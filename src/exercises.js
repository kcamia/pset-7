function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  } else {
    let aEnd = a.length - 1;
    let bEnd = b.length - 1;
    if (a[0] === b[0] || a[aEnd] === b[bEnd]) {
      return true;
    } else {
      return false;
    }
  };
  // write your code here
}

function endsMeet(values, n) {
  if (!values || values.length === 0 || n < 0) {
    return ;
  } else if (n === 0) {

  }
  // write your code here
}

function difference(numbers) {
  // write your code here
}

function max(number) {
  // write your code here
}

function middle(values) {
  // write your code here
}

function increasing(numbers) {
  // write your code here
}

function everywhere(values, x) {
  // write your code here
}

function consecutive(numbers) {
  // write your code here
}

function balance(numbers) {
  // write your code here
  console.log("test");
}

function clumps(values) {
  // write your code here
}

/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};

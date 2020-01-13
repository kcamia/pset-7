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
  let empty = [];
  if (!values || values.length === 0 || n < 0 || values.length < n) {
    return empty;
  } else if (n === 0 || values.length === 1) {
    return values;
//  } else if (n > 0) {
//    let newArray = [];
//    for (i = 0; i <= n - 1; i++) {
//      newArray[i] = values[i];
//    }
//    let end;
//    for (x = values.length - n; x <= values.length; x++) {
//      end = values[x];
//      newArray.push(end);
//    }
//    return newArray;
  } else {
    return values;
  }
  // write your code here
}

function difference(numbers) {
  if (!numbers || numbers.length < 1) {
    return undefined;
  } else if (numbers.length > 1) {
    for (i = 0; i <= numbers.length - 1; i++) {
      let number = numbers[i];
      if (isNaN(number)) {
        return undefined;
      }
    }
    if (numbers.length === 1) {
      return 0;
    } else {
      let largest = Math.max.apply(null, numbers);
      let smallest = Math.min.apply(null, numbers);
      let difference = largest - smallest;
      return difference;
    }
  } else {
    return undefined;
  }
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

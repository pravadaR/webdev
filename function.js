"use strict";

function get_max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
let max = get_max(5, 10);
document.write(max);

("use strict");
function make_changes(a, b, c) {
  a = 5;
  b = [1, 3, 5, 7, 9];
  c[0] = 8;
}
let x = 4;
let y = [2, 4, 6, 8, 10];
let z = [0, 0, 0, 0, 0];
make_changes(x, y, z);
document.write(x, y, z);

("use strict");

function multiply(x, y) {
  let p = x * y;
  return p;
}
let result = multiply(5, 10);

let multiply = function (x, y) {
  let p = x * y;
  return p;
};

let add = function (x, y) {
  let s = x + y;
  return s;
};

let a = 5,
  b = 20;
function action(x, y, z) {
  let r = z(x, y);
  return r;
}

let r = action(a, b, add);
document.write(r);

//arrow function

let multiply = (x, y) => {
  let p = x * y;
  return p;
};

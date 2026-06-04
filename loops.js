"use strict";

let n = 1;
while (n <= 10) {
  document.write(n * 2);
  n++;
}

("use strict");

n = 1;
do {
  document.write(n * 2);
  n++;
} while (n <= 10);

("use strict");

const arr = [2, 4, 6, 8, 10];
for (let element of arr) {
  document.write(element);
}

("use stict");

const obj = { George: 2001, Barack: 2009, Donald: 2018 };
for (let name in obj) {
  document.write(name + "got elected in" + obj[name]);
}

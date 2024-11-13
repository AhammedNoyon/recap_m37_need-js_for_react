let x = 10;
let y = 11;

if (x > y) {
  console.log("x is big more than y");
} else if (x >= y) {
  console.log("x is big or equal to ");
} else if (x < y) {
  x = 5;
  const sum = x + y;
  console.log("sum = ", sum);
} else if (x <= 8) {
  console.log("eight is big more than x");
}

const number = [3, 34, 5, 55];
if (number.length < 4 || number[0] === 3) {
  console.log("yes first index is 3");
} else if (number.length !== 4 && number[3] === 55) {
  console.log(
    "this condition is use not equal operator, and operator and equal operator"
  );
}

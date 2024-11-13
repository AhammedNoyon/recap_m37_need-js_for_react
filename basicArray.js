const numbers = [1, 22, 33, 2, 5, 55, 100];
//get by index
const x = numbers[1];
const y = numbers[3];

// console.log("sum = ", x + y);

// set by index
numbers[1] = 24;
numbers[3] = 6;

// console.log(numbers);

//length
const total = numbers.length;
console.log(x + total);

//push
numbers.push(33, 333, 3333);
console.log(numbers);

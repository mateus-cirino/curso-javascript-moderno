// Spread Operator (espalhamento)

const arr = [1, 2, 3];
const arr2 = [4, 5, 6];

for(let i = 0; i < arr2.length; i++) {
    arr.push(arr2[i]);
}

console.log(arr);

// É o mesmo que

const arr = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr, ...arr2];

console.log(arr3);

// Outros usos

const dateFields = [1970, 0, 1];  // 1 Jan 1970
const date = new Date(...dateFields);
console.log(date)
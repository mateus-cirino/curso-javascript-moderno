// Var

function processArray(array) {
  for (var i = 0; i < array.length; i++) {
    console.log("Elemento ", array[i]);
  }

  console.log("Eu consigo usar a variável i fora do loop ", i);
}

var arr = [1, 2, 3];

processArray(arr);

// Let

function processArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log("Elemento ", array[i]);
  }

  console.log("Eu não consigo usar a variável i fora do loop ", i);
}

let arr = [1, 2, 3];

processArray(arr);

// Const

const nome = "Mateus Cirino";

nome = "Felipe";

const arr = [1, 2, 3];

arr.push(4);

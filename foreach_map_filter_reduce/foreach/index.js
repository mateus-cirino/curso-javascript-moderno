// forEach

const arr = [1, 2, 3];

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// É o mesmo que

function imprimirElemento(elemento) {
  console.log(elemento);
}

arr.forEach(imprimirElemento);

// É o mesmo que

arr.forEach((elemento) => {
  console.log(elemento);
});

// Filter

const arr = [
  {
    nome: "Mateus",
    idade: 40,
  },
  {
    nome: "Felipe",
    idade: 15,
  },
  {
    nome: "Maria",
    idade: 20,
  },
];

for (let i = 0; i < arr.length; i++) {
  const funcionario = arr[i];
  if (funcionario.idade > 20) {
    console.log(funcionario);
  }
}

// É o mesmo que

function idadeMaiorQue20(elemento) {
  return elemento.idade > 20;
}

console.log(arr.filter(idadeMaiorQue20));

// É o mesmo que

arr
  .filter((elemento) => elemento.idade > 20)
  .map((elemento) => {
    console.log(elemento);
  });

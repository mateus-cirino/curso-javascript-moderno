// Map

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

const idades = [];

for(let i = 0; i < arr.length; i++) {
    idades.push(arr[i].idade);
}

console.log(idades);

// É o mesmo que 

console.log(arr.map(elemento => elemento.idade));
  
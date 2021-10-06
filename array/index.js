// Array

const arr = [1, 2, 3];

// Array com objetos

const criarFuncionario = (nome, idade) => {
  return {
    nome,
    idade,
  };
};

const func1 = criarFuncionario("Mateus", 40);
const func2 = criarFuncionario("Felipe", 15);
const func3 = criarFuncionario("Maria", 25);

const arrFuncionarios = [func1, func2, func3];

// É o mesmo que

const arrFuncionarios = [
  { nome: "Mateus", idade: 40 },
  { nome: "Felipe", idade: 15 },
  { nome: "Maria", idade: 25 },
];

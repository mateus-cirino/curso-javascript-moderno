// Destructuring (desestruturação)

const funcionario = {
    nome: "Mateus Cirino",
    idade: 40,
    formacao: "Ciência da Computação",
};

const { nome, idade } = funcionario;

console.log(nome);

console.log(idade);

// desestruturação de níveis inferiores

const aluno = {
    nome: "Mateus Cirino",
    curso: {
      nome: "Ciência da Computação",
      periodo: 90,
    },
};

const { curso: { nome } } = aluno;

console.log(curso);


// outros usos

const elementos = [1, 2, 3, 4, 5];

const [first, second] = elementos;

console.log(first);
console.log(second);
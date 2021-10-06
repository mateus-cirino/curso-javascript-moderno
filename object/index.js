// Object

const funcionario = {
  nome: "Mateus Cirino",
  idade: 40,
  formacao: "Ciência da Computação",
};

// Object dentro de Object

const curso = {
  nome: "Ciência da Computação",
  periodo: 90,
};

const aluno = {
  nome: "Mateus Cirino",
  curso: curso,
};

// É igual a

const aluno = {
  nome: "Mateus Cirino",
  curso,
};

// Que por sua vez é igual a

const aluno = {
  nome: "Mateus Cirino",
  curso: {
    nome: "Ciência da Computação",
    periodo: 90,
  },
};

// Acesso a propriedades

const aluno = {
  nome: "Mateus Cirino",
  curso: {
    nome: "Ciência da Computação",
    periodo: 90,
  },
};

aluno.nome;
aluno.curso.nome;

// Funções em objetos

const aluno = {
  nome: "Mateus Cirino",
  curso: {
    nome: "Ciência da Computação",
    periodoAtual: 8,
    numeroPeriodos: 20,
    faltamQuantosPeriodos: (numeroPeriodos, periodoAtual) =>
      numeroPeriodos - periodoAtual,
  },
};

console.log(
  aluno.curso.faltamQuantosPeriodos(
    aluno.curso.numeroPeriodos,
    aluno.curso.periodoAtual
  )
);

// Outras formas de acesso a propriedades

const funcionario = {
  nome: "Mateus Cirino",
  idade: 40,
  formacao: "Ciência da Computação",
};

console.log(funcionario.nome);
console.log(funcionario["nome"]);

function acessoDinamicoAPropriedades(objeto, nomeDaPropriedade) {
  console.log(objeto[nomeDaPropriedade]);
}

acessoDinamicoAPropriedades(funcionario, "idade");

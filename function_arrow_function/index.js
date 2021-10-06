// Function

function getNomeCompleto(firstName, lastName) {
  return firstName + " " + lastName;
}

const nomeCompleto = getNomeCompleto("Mateus", "Cirino");

// Arrow Function

const getNomeCompleto = (firstName, lastName) => {
  return firstName + " " + lastName;
};

getNomeCompleto("Mateus", Cirino);

const getNomeCompleto = (firstName, lastName) => firstName + " " + lastName;

// String Literal

const getNomeCompleto = (firstName, lastName) => `${firstName} ${lastName}`;

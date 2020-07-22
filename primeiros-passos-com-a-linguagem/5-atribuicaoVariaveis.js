const idade = 20;
const nome = "Daniel";
const sobrenome = "Bou";

console.log(nome,sobrenome);
console.log(nome + " " + sobrenome);

console.log(`Meu nome é ${nome} ${sobrenome}`);

// nome = nome + sobrenome; // Erro: Varivel const (constante) não muda

let nomeLet = nome + " " + sobrenome;

console.log(nomeLet);

/** Sempre tentar utilizar const ao invés de let (Boa práticas) */
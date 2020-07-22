const lista = new Array("Salvador", "São Paulo", "Rio de Janeiro");

const idadeComparador = 15;
const estaAcompanhada = true;

if (idadeComparador > 18) {
    console.log("Maior de idade");
} else if (estaAcompanhada == true){
    console.log("Comprador está acompanhado");
} else {
    console.log("Não é maior de idade e não posso vender.");
}

console.log(idadeComparador > 18);
console.log(idadeComparador >= 18);
console.log(idadeComparador < 18);
console.log(idadeComparador <= 18);
console.log(idadeComparador == 18);
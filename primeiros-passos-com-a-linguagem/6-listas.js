console.log("Trabalhando com Listas");

/*const salvador = "Salvador";
const saoPaulo = "São paulo";
const rioDeJaneiro = "Rio de Janeiro"; */

const lista = new Array("Salvador", "São Paulo", "Rio de Janeiro");

lista.push("Bahia"); // Adicionar um item à lista

console.log(lista); // "Salvador", "São Paulo", "Rio de Janeiro", "Bahia"

console.log(lista[1]);

lista.splice(0,2); // "Salvador", "São Paulo"

console.log(lista); // "Rio de Janeiro", "Bahia"
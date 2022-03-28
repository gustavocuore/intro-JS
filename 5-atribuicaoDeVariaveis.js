console.log("Trabalhando com atribuição de variáveis");

const primeiroNome = "Ricardo";
const sobrenome = "Bugan";

//console.log(nome + " " + sobrenome); igual o abaixo
console.log(primeiroNome, sobrenome);
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`); //eu preciso inserir crases, caso contrário não funciona

let contador = 0;
contador = contador + 1;

const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);
//é importante tentar manter o máximo possível usar const para declarar

let idade; //declarando variável
idade = 26; //atribuindo valor
idade = idade + 1;
console.log(idade);
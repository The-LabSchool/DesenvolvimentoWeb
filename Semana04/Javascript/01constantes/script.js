
// Em javascript definimos variáveis de 3 formas:
var variavel_1 = "variavel_ocm_var"
let variavel_2 = "variavel_com_let";
const variavel_3 = "variavel_com_const";

// Em C ou Python, variáveis nascem e morrem dentro de seus blocos (if, for, etc).
// O 'var' no JavaScript ignora blocos básicos.

if (true) {
    var vazaEscopo = "Fugi do bloco if!";
    let naoVaza = "Estou seguro no meu bloco.";
}

console.log(vazaEscopo); // Imprime: "Fugi do bloco if!" (O terror dos engenheiros de software)
// console.log(naoVaza); // Se descomentar, vai dar ERRO: naoVaza is not defined. O 'let' respeita o escopo!
// O 'var' tem um comportamento tão estranho que foi considerado um erro de design e o 'let' e 'const' foram introduzidos para corrigir isso.

// ==========================================================
// Varieis tipos de dados em JS (dinamicamente tipada)

let valor = 0;
console.log("Valor do let:", valor);
valor = 1; // Tudo certo, let permite reatribuição.
console.log("Valor do let após mudança numerica:", valor);
valor = "Agora sou uma string!"; // Tudo certo, let é dinamicamente tipada.
console.log("Valor do let após mudança de tipo:", valor);


//  ========================================================== 
//    A GRANDE ILUSÃO DA IMUTABILIDADE (CONST)

const pi = 3.1415;
// pi = 3.14; // ERRO: Assignment to constant variable. 
// Para números, strings e booleanos, o const bloqueia a mudança de valor.
console.log("Valor de PI:", pi);


// Em JS, Objetos e Arrays são passados por REFERÊNCIA (como ponteiros no C++).
// O 'const' trava a REFERÊNCIA na memória, mas não o conteúdo dentro dela!

const candidato = {
    nome: "João",
    idade: 20
};

// O que é PROIBIDO (Tentar apontar para outro lugar na memória):
// candidato = { nome: "Maria", idade: 22 }; // ERRO!

// ✅ O que é PERMITIDO (Mudar o que está dentro do espaço de memória atual):
candidato.nome = "Maria"; 
candidato.idade = 22;

console.log("Candidato alterado com sucesso:", candidato);


console.log("\n--- 5. CONST com Arrays (A mesma regra) ---");
const notas = [7, 8, 9];

// ❌ Proibido (reatribuir o array inteiro):
// notas = [10, 10, 10]; // ERRO!

// ✅ Permitido (alterar ou empurrar dados para dentro do array existente):
notas.push(10); // Adiciona o 10 no final
notas[0] = 5;   // Muda a primeira nota

console.log("Array alterado mesmo sendo const:", notas);
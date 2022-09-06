// Tive dificuldades de entender o que se pede e não consegui implementar junto ao meus portfolios.
// Fui até onde minha experiência permite.

// DEVIDO AO WINDOW.PROMPT, SÓ IRÁ EXECUTAR EM UM COMPILADOR ONLINE PARA O "INPUT".

const number = parseInt(prompt('Digite quantos números em sequencia você deseja. '));
let n1 = 0, n2 = 1, nextTerm;

console.log(`Sequência de números de Fibonacci desejados:`);

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
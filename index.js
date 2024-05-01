//! 1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o valor correspondente em graus Fahrenheit.
// const prompt = require('prompt-sync')();
// Solicita ao usuário que digite a temperatura em graus Celsius
let temperaturaCelsius = prompt("Digite a temperatura em graus Celsius:");
// Converte a entrada do usuário em um número
temperaturaCelsius = parseFloat(temperaturaCelsius);
// Calcula a temperatura em graus Fahrenheit usando a fórmula
let temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;
// Exibe o resultado no console
console.log(`${temperaturaCelsius} graus Celsius equivalem a ${temperaturaFahrenheit} graus Fahrenheit`);
console.clear();

//! 2. Escreva um algoritmo para ler o número de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.
// const prompt = require('prompt-sync')();

// Solicita ao usuário que digite a quantidade de eleitores e os votos
let quantidadeDeEleitores = parseInt(prompt("Digite a quantidade de eleitores: "));
let quantidadeVotosBrancos = parseInt(prompt("Digite a quantidade de votos em branco: "));
let quantidadeVotosNulos = parseInt(prompt("Digite a quantidade de votos nulos: "));
let quantidadeDeVotosValidos = parseInt(prompt("Digite a quantidade de votos válidos: "));

// Calcula o percentual de cada tipo de voto em relação ao total de eleitores
let percentualVotosBrancos = (quantidadeVotosBrancos / quantidadeDeEleitores) * 100;
let percentualVotosNulos = (quantidadeVotosNulos / quantidadeDeEleitores) * 100;
let percentualVotosValidos = (quantidadeDeVotosValidos / quantidadeDeEleitores) * 100;

// Exibe os resultados
console.log(`Percentual de votos em branco: ${percentualVotosBrancos.toFixed(0)}%`);
console.log(`Percentual de votos nulos: ${percentualVotosNulos.toFixed(0)}%`);
console.log(`Percentual de votos válidos: ${percentualVotosValidos.toFixed(0)}%`);

//! 3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:Some 25 ao primeiro inteiro; Triplique o valor do segundo inteiro; Modifique o valor do terceiro inteiro para 12% do valor original; Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou) dos primeiros três inteiros.
// const prompt = require('prompt-sync')();

let leiaNumber1 = parseInt(prompt("Digite o primeiro número: "));
let leiaNumber2 = parseInt(prompt("Digite o segundo número: "));
let leiaNumber3 = parseInt(prompt("Digite o terceiro número: "));
let leiaNumber4 = parseInt(prompt("Digite o quarto número: "));

let soma25PrimeiroNumero = leiaNumber1 + 25;
let multipliquepor3SegundoNumero = leiaNumber2 * 3;
let dozePorCentoTerceiroNumero = leiaNumber3 * (12 / 100);
let somaDosInteiros = leiaNumber1 + leiaNumber2 + leiaNumber3

console.log(soma25PrimeiroNumero);
console.log(multipliquepor3SegundoNumero); 100
console.log(`${dozePorCentoTerceiroNumero}%`);
console.log(`${somaDosInteiros}`);

//! 4 e 5 Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para aprovação).
// const prompt = require('prompt-sync')();

let primeiraAvaliaçao = parseFloat(prompt("digite a nota da primeira avaliação:	"))
let segundaAvaliaçao = parseFloat(prompt("digite a nota da primeira avaliação:	"))

let media = (primeiraAvaliaçao + segundaAvaliaçao) / 2
if (media >= 6) {
  console.log(` sua média é: ${media}, PARABÉNS! Você foi aprovado`)
} else {
  console.log(`sua média é: ${media}, ‘Você foi REPROVADO! Estude mais`)
}

//! 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero. Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C) Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C) Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
// const prompt = require('prompt-sync')();

// Ler os valores dos lados do triângulo
let ladoA = parseFloat(prompt("Digite o valor do lado A: "));
let ladoB = parseFloat(prompt("Digite o valor do lado B: "));
let ladoC = parseFloat(prompt("Digite o valor do lado C: "));

// Verificar se os lados formam um triângulo
if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
  // É um triângulo
  console.log("Os valores fornecidos formam um triângulo.");

  // Determinar o tipo de triângulo
  if (ladoA === ladoB && ladoB === ladoC) {
    console.log("É um triângulo equilátero.");
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    console.log("É um triângulo isósceles.");
  } else {
    console.log("É um triângulo escaleno.");
  }
} else {
  // Não é um triângulo
  console.log("Os valores fornecidos não formam um triângulo.");
}

//! 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
// const prompt = require('prompt-sync')();

// Ler a quantidade de maçãs compradas
let quantidadeMacas = parseInt(prompt("Digite a quantidade de maçãs: "));

// Determinar o preço por maçã com base na quantidade comprada
let precoPorMaca = quantidadeMacas < 12 ? 0.30 : 0.25;

// Calcular o valor total da compra
let valorTotal = quantidadeMacas * precoPorMaca;

// Exibir o valor total da compra
console.log(`O valor total da compra é: R$ ${valorTotal.toFixed(2)}`);

//! 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.
// const prompt = require('prompt-sync')();

// Ler os dois valores
let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
let valor2 = parseFloat(prompt("Digite o segundo valor: "));

// Verificar qual valor é menor
let menor, maior;

if (valor1 < valor2) {
  menor = valor1;
  maior = valor2;
} else {
  menor = valor2;
  maior = valor1;
}

// Escrever os valores em ordem crescente
console.log(`Valores em ordem crescente: ${menor}, ${maior}`);

//! 9. Escreva um algoritmo que leia o código de origem de um produto e imprima a região do mesmo, conforme a tabela abaixo:
// const prompt = require('prompt-sync')();
function identificarRegiao(codigo) {
  switch (codigo) {
    case 1:
      return "Sul";
    case 2:
      return "Norte";
    case 3:
      return "Leste";
    case 4:
      return "Oeste";
    case 5:
    case 6:
      return "Nordeste";
    case 7:
    case 8:
    case 9:
      return "Sudeste";
    default:
      if (codigo >= 10 && codigo <= 20) {
        return "Centro - Oeste";
      } else if (codigo >= 25 && codigo <= 50) {
        return "Nordeste";
      } else {
        return "Produto importado";
      }
  }
}

// Exemplo de uso:
let codigoProduto = parseInt(prompt("Digite o código de origem: "));
let regiao = identificarRegiao(codigoProduto);
console.log(`Região do produto: ${regiao}`);

//!10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

// const prompt = require('prompt-sync')();

// Ler o número inteiro do usuário
const numeroInt = parseInt(prompt('Digite um número inteiro: '));

// Verificar se o valor inserido é um número
if (isNaN(numeroInt)) {
  console.log('Entrada inválida. Por favor, insira um número inteiro válido.');
} else {
  // Escrever o número na tela 10 vezes
  for (let i = 0; i < 10; i++) {
    console.log(numeroInt);
  }
}

//! 11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou NEGATIVO.

// const prompt = require('prompt-sync')();

// Função para verificar se um número é PAR ou ÍMPAR
function verificarParOuImpar(numero) {
  if (numero % 2 === 0) {
    return "PAR";
  } else {
    return "ÍMPAR";
  }
}

// Loop para ler os valores indeterminados
while (true) {
  // Ler o valor inteiro do usuário
  const valor = parseInt(prompt('Digite um valor inteiro (Digite NULO ou NEGATIVO para sair): '));

  // Verificar se o valor é nulo ou negativo para encerrar o loop
  if (valor <= 0 || isNaN(valor)) {
    console.log('Encerrando o programa...');
    break; // Encerra o loop
  }

  // Determinar se o valor é PAR ou ÍMPAR e exibir a mensagem correspondente
  const resultado = verificarParOuImpar(valor);
  console.log(`${valor} é ${resultado}`);
}

//! 12. Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que, divididos por 11, dão resto igual a 5.

// Função para encontrar números no intervalo de 1000 a 1999
// que, divididos por 11, têm resto igual a 5
function encontrarNumerosDivisiveisPorOnzeComRestoCinco() {
  for (let numero = 1000; numero <= 1999; numero++) {
    // Verificar se o número dividido por 11 tem resto igual a 5
    if (numero % 11 === 5) {
      console.log(numero);
    }
  }
}

// Chamar a função para encontrar e imprimir os números desejados
console.log("Números de 1000 a 1999 divididos por 11 com resto igual a 5:");
encontrarNumerosDivisiveisPorOnzeComRestoCinco();


// const prompt = require('prompt-sync')();

// Função para ler os valores e mostrar a tabuada de cada um
function calcularTabuadaParaCincoValores() {
  for (let i = 0; i < 5; i++) {
    // Ler o valor de N
    const N = parseInt(prompt(`Digite o ${i + 1}º valor de N: `));

    // Mostrar a tabuada de 1 até N
    console.log(`Tabuada de ${N}:`);
    for (let j = 1; j <= 10; j++) {
      console.log(`${j} x ${N} = ${j * N}`);
    }

    console.log(); // Adicionar uma linha em branco entre cada tabuada
  }
}

// Chamar a função para calcular e mostrar a tabuada para os 5 valores
console.log("Digite 5 valores para calcular as tabuadas:");
calcularTabuadaParaCincoValores();

//? Utilizar somente while do exercício 14 ao 16
//! 14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

// const prompt = require('prompt-sync')();

let soma = 0;
let contador = 0;

console.log("Digite números decimais. Digite 0 para encerrar e calcular a média.");

let numero = parseFloat(prompt("Digite um número decimal (ou 0 para encerrar): "));

while (numero !== 0) {
  soma += numero; // Adiciona o número à soma total
  contador++; // Incrementa o contador de números

  numero = parseFloat(prompt("Digite outro número decimal (ou 0 para encerrar): "));
}

if (contador === 0) {
  console.log("Nenhum número foi inserido.");
} else {
  const media = soma / contador;
  console.log(`A média aritmética dos números digitados é: ${media.toFixed(2)}`);
}

//! 15. Fazer um algoritmos para receber um número decimal e o peso de cada número até que o usuário digite o número 0. Fazer a média ponderada desses números e pesos respectivos.

// const prompt = require('prompt-sync')();

// let somaProdutos = 0;
// let somaPesos = 0;

// console.log("Digite números decimais e seus respectivos pesos. Digite 0 como número para encerrar e calcular a média ponderada.");

// let numero = parseFloat(prompt("Digite um número decimal (ou 0 para encerrar): "));

// while (numero !== 0) {
//   const peso = parseFloat(prompt("Digite o peso para este número: "));

//   // Somar o produto do número pelo peso
//   somaProdutos += numero * peso;
//   // Somar somente os pesos
//   somaPesos += peso;

//   numero = parseFloat(prompt("Digite outro número decimal (ou 0 para encerrar): "));
// }

// if (somaPesos === 0) {
//   console.log("Nenhum número foi inserido.");
// } else {
//   const mediaPonderada = somaProdutos / somaPesos;
//   console.log(`A média ponderada dos números digitados é: ${mediaPonderada.toFixed(2)}`);
// }

//! 16. Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100. Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.

// Função para verificar se um número é primo
function ehPrimo(numero) {
  if (numero <= 1) {
    return false;
  }

  // Verificar se o número é divisível por algum número além de 1 e ele mesmo
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

// Função para encontrar os 50 primeiros números primos maiores que 100 e imprimi-los
function imprimirPrimosMaioresQue100() {
  let contador = 0;
  let numero = 101; // Começar verificando a partir do número 101

  while (contador < 50) {
    if (ehPrimo(numero)) {
      console.log(numero);
      contador++;
    }
    numero++; // Verificar o próximo número
  }
}

// Chamar a função para encontrar e imprimir os 50 primeiros números primos maiores que 100
console.log("Os 50 primeiros números primos maiores que 100 são:");
imprimirPrimosMaioresQue100();

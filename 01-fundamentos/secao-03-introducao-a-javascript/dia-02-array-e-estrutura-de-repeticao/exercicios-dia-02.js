// Percorra o array imprimindo todos os valores contidos nele com a função console.log().

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index <= numbers.length; index += 1) {
    console.log(numbers[index]);
}

// Some todos os valores contidos no array e imprima o resultado.

let resultado = 0
for (let index = 0; index < numbers.length; index += 1) {
    resultado = resultado + numbers[index];
}

console.log(resultado);

// Calcule e imprima a média aritmética dos valores contidos no array.
// A média aritmética é o resultado da soma de todos os elementos dividido
// pelo número total de elementos.

let media = resultado / numbers.length

console.log(media);

// Com base no código que acabou de gerar, referente ao cálculo da média aritmética,
// faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética
// é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é
// menor ou igual a 20”.

if (media > 20) {
    console.log('O valor da média aritmética é maior que 20');
} else {
    console.log('O valor da média aritmética é menor ou igual a 20');
}

// Utilizando for, descubra o maior valor contido no array e imprima-o.

let maiorValor = numbers[0];
for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maiorValor) {
        maiorValor = numbers[index];
    }
}

console.log(maiorValor);

// Descubra quantos valores ímpares existem no array e imprima o resultado.
// Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

let numerosImpares = 0;

for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        numerosImpares = numerosImpares + 1;
    }
}

if (numerosImpares === 0) {
    console.log("Nenhum valor ímpar encontrado");
} else {
    console.log(numerosImpares);
}

// O fatorial é representado pelo sinal !
// Exemplo de 4 fatorial:
// 4! = 4 x 3 x 2 x 1 = 24

// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
    fatorial = fatorial * index;
  }

console.log(fatorial);
